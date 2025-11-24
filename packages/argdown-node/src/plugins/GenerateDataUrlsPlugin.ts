import {
  IAsyncArgdownPlugin,
  IAsyncRequestHandler
} from "../IAsyncArgdownPlugin.js";
import {
  ArgdownPluginError,
  IArgdownRequest,
  IArgdownResponse,
  IArgdownLogger
} from "@argdown/core";
import isSvg from "is-svg";
import imageType from "image-type";
import { imageUtils } from "./utils.js";
import path from "path";

export class GenerateDataUrlsPlugin implements IAsyncArgdownPlugin {
  name = "GenerateDataUrlsPlugin";
  runAsync: IAsyncRequestHandler = async (
    request: IArgdownRequest,
    _response: IArgdownResponse,
    _logger: IArgdownLogger
  ) => {
    if (
      !request.images ||
      !request.images.files ||
      !request.images.convertToDataUrls
    ) {
      return;
    }
    for (const image of Object.values(request.images.files)) {
      // Access properties with proper null checking for unknown object structure
      if (
        !image ||
        typeof image !== "object" ||
        !("path" in image) ||
        !(image as { path?: string }).path
      ) {
        return;
      }
      const imageObj = image as { path: string; dataUrl?: string };
      try {
        const baseDir =
          request.inputPath && !!path.extname(request.inputPath)
            ? path.dirname(request.inputPath)
            : request.inputPath || "";
        const buffer = await imageUtils.getImage(imageObj.path, baseDir);
        let mimeType = "";
        if (buffer) {
          const bufferString = buffer.toString("utf-8");
          if (isSvg(bufferString)) {
            mimeType = "svg+xml";
          } else {
            const imageTypeResult = await imageType(buffer);
            if (imageTypeResult) {
              mimeType = imageTypeResult.mime;
            } else {
              throw new Error("File is not an image.");
            }
          }
          const dataUrl = `data:${mimeType};base64,${buffer.toString(
            "base64"
          )}`;
          // const stringToReplace = new RegExp(imageObj.path, "g");
          // response.svg = response.svg?.replace(stringToReplace, dataUrl);
          // logger.log("verbose", `dataUrl: ${dataUrl}`);
          imageObj.dataUrl = dataUrl;
          // imageObj.path = dataUrl;
        }
      } catch (err) {
        if (err instanceof Error) {
          throw new ArgdownPluginError(
            this.name,
            "inline-image-generation-failed",
            `'Generating inline image of '${imageObj.path}' failed. ${err.message}`
          );
        }
      }
    }
  };
}
