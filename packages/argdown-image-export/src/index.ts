import {
  IAsyncArgdownPlugin,
  IAsyncRequestHandler,
  AsyncArgdownApplication,
  SaveAsFilePlugin,
  StdOutPlugin
} from "@argdown/node";
import {
  isObject,
  mergeDefaults,
  IRequestHandler,
  checkResponseFields,
  IArgdownRequest,
  IArgdownResponse
} from "@argdown/core";
import sharp from "sharp";
import defaultsDeep from "lodash.defaultsdeep";

export interface IImageExportPluginSettings {
  format?: "png" | "jpg" | "webp";
  directory?: string;
  quality?: number;
  width?: number;
  height?: number;
  background?: string;
  encoding?: "base64" | "utf8" | "binary" | "hex";
  // Sharp-specific enhancements
  progressive?: boolean; // For JPEG and PNG
  compressionLevel?: number; // PNG compression (0-9)
  lossless?: boolean; // WebP lossless mode
  effort?: number; // WebP/PNG effort (1-10)
  mozjpeg?: boolean; // Use mozjpeg for smaller JPEG files
  // SVG rendering quality settings
  density?: number; // DPI for SVG rendering (default: 72, recommended: 150-300)
  scale?: number; // Scale factor for higher resolution (alternative to density)
}
declare module "@argdown/core" {
  interface IArgdownRequest {
    /**
     * Settings for the [[ImageExportPlugin]]
     **/
    image?: IImageExportPluginSettings;
  }
  interface IArgdownResponse {
    /**
     * Data of the [[ImageExportPlugin]]
     **/
    png?: string | Buffer;
    jpg?: string | Buffer;
    webp?: string | Buffer;
  }
}
const defaultSettings: IImageExportPluginSettings = {
  format: "png",
  quality: 90, // Increased from default
  background: "#FFFFFF",
  density: 150, // 150 DPI for crisp text rendering
  scale: 2 // 2x scale for retina-quality output
};
export class ImageExportPlugin implements IAsyncArgdownPlugin {
  name: string = "ImageExportPlugin";
  defaults: IImageExportPluginSettings = {};
  constructor(config?: IImageExportPluginSettings) {
    this.defaults = defaultsDeep({}, config, defaultSettings);
    this.name = "ImageExportPlugin";
  }
  getSettings = (request: IArgdownRequest) => {
    if (!isObject(request.image)) {
      request.image = {};
    }
    return request.image;
  };
  prepare: IRequestHandler = (request, response) => {
    checkResponseFields(this, response, ["svg"]);
    mergeDefaults(this.getSettings(request), this.defaults);
  };

  runAsync: IAsyncRequestHandler = async (
    request: IArgdownRequest,
    response: IArgdownResponse
  ) => {
    const settings = this.getSettings(request);
    const svgString = response.svg ?? "";

    if (!svgString) {
      throw new Error("No SVG data found in response");
    }

    try {
      // Set up Sharp with SVG input and high-quality rendering
      const density = settings.density || 150; // Default to 150 DPI for crisp text
      const scale = settings.scale || 1;

      // Create Sharp instance from SVG with density setting for better text rendering
      let sharpInstance = sharp(Buffer.from(svgString), {
        density: density
      });

      // Apply scaling for higher resolution if specified
      if (scale > 1) {
        // First get the SVG dimensions to calculate scaled size
        const metadata = await sharpInstance.metadata();
        const scaledWidth = metadata.width
          ? Math.round(metadata.width * scale)
          : undefined;
        const scaledHeight = metadata.height
          ? Math.round(metadata.height * scale)
          : undefined;

        if (scaledWidth && scaledHeight) {
          sharpInstance = sharpInstance.resize(scaledWidth, scaledHeight, {
            kernel: sharp.kernel.lanczos3, // High-quality resampling
            withoutEnlargement: false
          });
        }
      }

      // Apply custom resize if width or height specified (overrides scale)
      if (settings.width || settings.height) {
        sharpInstance = sharpInstance.resize(settings.width, settings.height, {
          fit: "inside", // Maintain aspect ratio
          withoutEnlargement: false,
          kernel: sharp.kernel.lanczos3 // High-quality resampling
        });
      }

      // Apply background if specified
      if (settings.background) {
        sharpInstance = sharpInstance.flatten({
          background: settings.background
        });
      }

      // Generate output based on format with high-quality settings
      if (settings.format === "png") {
        const pngOptions: sharp.PngOptions = {
          quality: Math.max(settings.quality || 90, 90), // Ensure minimum quality for text
          compressionLevel: settings.compressionLevel || 6,
          progressive: settings.progressive || false,
          effort: settings.effort || 7
        };

        response.png = await sharpInstance.png(pngOptions).toBuffer();
      } else if (settings.format === "jpg") {
        const jpegOptions: sharp.JpegOptions = {
          quality: Math.max(settings.quality || 90, 85), // Ensure minimum quality for text
          progressive: settings.progressive || false,
          mozjpeg: settings.mozjpeg || false,
          chromaSubsampling: "4:4:4" // Prevent chroma subsampling for better text quality
        };

        response.jpg = await sharpInstance.jpeg(jpegOptions).toBuffer();
      } else if (settings.format === "webp") {
        const webpOptions: sharp.WebpOptions = {
          quality: Math.max(settings.quality || 90, 85), // Ensure minimum quality for text
          lossless: settings.lossless || false,
          effort: settings.effort || 6
        };

        response.webp = await sharpInstance.webp(webpOptions).toBuffer();
      }
    } catch (error) {
      throw new Error(
        `Image export failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };
}
export const installImageExport = (argdown: AsyncArgdownApplication) => {
  argdown.addPlugin(new ImageExportPlugin({ format: "png" }), "export-png");
  argdown.addPlugin(new ImageExportPlugin({ format: "jpg" }), "export-jpg");
  argdown.addPlugin(new ImageExportPlugin({ format: "webp" }), "export-webp");
  argdown.addPlugin(
    new SaveAsFilePlugin({
      dataKey: "png",
      extension: ".png",
      outputDir: "./images"
    }),
    "save-as-png"
  );
  argdown.addPlugin(
    new SaveAsFilePlugin({
      dataKey: "jpg",
      extension: ".jpg",
      outputDir: "./images"
    }),
    "save-as-jpg"
  );
  argdown.addPlugin(
    new SaveAsFilePlugin({
      dataKey: "webp",
      extension: ".webp",
      outputDir: "./images"
    }),
    "save-as-webp"
  );
  argdown.addPlugin(new StdOutPlugin({ dataKey: "png" }), "stdout-png");
  argdown.addPlugin(new StdOutPlugin({ dataKey: "jpg" }), "stdout-jpg");
  argdown.addPlugin(new StdOutPlugin({ dataKey: "webp" }), "stdout-webp");
};
