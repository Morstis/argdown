import * as fs from "fs";
import * as path from "path";
import { createRequire } from "module";
import mkdirp from "mkdirp";
import defaultsDeep from "lodash.defaultsdeep";

import { IArgdownRequest, IRequestHandler } from "@argdown/core";

const require = createRequire(import.meta.url);
import {
  IAsyncArgdownPlugin,
  IAsyncRequestHandler
} from "../IAsyncArgdownPlugin.js";

export interface ICopyDefaultCssSettings {
  outputDir?: string;
}
declare module "@argdown/core" {
  interface IArgdownRequest {
    /**
     * Settings of the [[CopyDefaultCssPlugin]]
     */
    copyDefaultCss?: ICopyDefaultCssSettings;
  }
}
export class CopyDefaultCssPlugin implements IAsyncArgdownPlugin {
  name = "CopyDefaultCssPlugin";
  defaults?: ICopyDefaultCssSettings;
  constructor(config?: ICopyDefaultCssSettings) {
    this.defaults = defaultsDeep({}, config, {
      outputDir: "./html"
    });
  }
  getSettings = (request: IArgdownRequest): ICopyDefaultCssSettings => {
    if (!request.copyDefaultCss) {
      request.copyDefaultCss = {};
    }
    return request.copyDefaultCss;
  };
  prepare: IRequestHandler = request => {
    const settings = this.getSettings(request);
    defaultsDeep(settings, this.defaults);
    if (request.html && request.html.outputDir) {
      settings.outputDir = request.html.outputDir;
    } else if (request.saveAs && request.saveAs.outputDir) {
      settings.outputDir = request.saveAs.outputDir;
    }
  };
  runAsync: IAsyncRequestHandler = async (request, _response, logger) => {
    const settings = this.getSettings(request);
    const rootPath = request.rootPath || process.cwd();
    const outputDir = request.outputPath
      ? path.dirname(request.outputPath)
      : settings.outputDir ?? "";
    const absoluteOutputDir = path.resolve(rootPath, outputDir);
    await mkdirp(absoluteOutputDir);
    const pathToDefaultCssFile = require.resolve(
      "@argdown/core/dist/plugins/argdown.css"
    );
    logger.log(
      "verbose",
      "Copying default argdown.css to folder: " + absoluteOutputDir
    );
    const { COPYFILE_EXCL } = fs.constants;
    try {
      await new Promise<void>((resolve, reject) => {
        fs.copyFile(
          pathToDefaultCssFile,
          path.resolve(absoluteOutputDir, "argdown.css"),
          COPYFILE_EXCL,
          (err: Error | null) => {
            if (err) {
              reject(err);
            }
            resolve();
          }
        );
      });
    } catch (error) {
      if (error instanceof Error && (error as any).code !== "EEXIST") {
        throw error;
      } else {
        logger.log(
          "verbose",
          "Did not copy default argdown.css, because file already exists: " +
            absoluteOutputDir
        );
      }
    }
  };
}
