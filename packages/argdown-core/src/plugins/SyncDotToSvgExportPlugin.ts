import { IArgdownPlugin, IRequestHandler } from "../IArgdownPlugin.js";
import { DefaultSettings, isObject, mergeDefaults } from "../utils.js";
import defaultsDeep from "lodash.defaultsdeep";
import { IArgdownRequest } from "../index.js";
import { checkResponseFields } from "../ArgdownPluginError.js";
import { Engine, Graphviz, Options } from "@hpcc-js/wasm-graphviz";

export interface IVizSettings {
  removeProlog?: boolean;
  engine?: Engine;
  nop?: number;
}
declare module "../index.js" {
  interface IArgdownRequest {
    /**
     * Settings for any plugin using Viz.js, for example the [[DotToSvgExportPlugin]]
     */
    vizJs?: IVizSettings;
  }
  export interface IArgdownResponse {
    /**
     * Exported svg
     *
     * Provided by the [[DotToSvgExportPlugin]]
     */
    svg?: string;
  }
}

const defaultSettings: DefaultSettings<IVizSettings> = {
  removeProlog: true,
  engine: "dot"
};
/**
 * Converts a DOT graph to an SVG image using graphviz via hpcc-js/wasm-graphviz
 * The result ist stored in the [[IDotResponse.svg]] response object property.
 *
 * Depends on data from: [[DotExportPlugin]]
 */
export class SyncDotToSvgExportPlugin implements IArgdownPlugin {
  name = "SyncDotToSvgExportPlugin";
  defaults: IVizSettings;
  constructor(
    private graphviz: Pick<Graphviz, "layout">,
    config?: IVizSettings
  ) {
    this.defaults = defaultsDeep({}, config, defaultSettings);
  }
  getSettings(request: IArgdownRequest) {
    if (!isObject(request.vizJs)) request.vizJs = {};
    return request.vizJs;
  }
  prepare: IRequestHandler = (request) => {
    mergeDefaults(this.getSettings(request), this.defaults);
  };
  run: IRequestHandler = (request, response) => {
    const requiredResponseFields: string[] = ["dot"];
    checkResponseFields(this, response, requiredResponseFields);
    const { engine, nop, removeProlog } = this.getSettings(request);
    const files = request.images?.files;
    const settings: Options = {
      nop
    };
    if (files) {
      settings.images = Object.values(files).map(({ path, width, height }) => ({
        path,
        width: `${width || 100}px`,
        height: `${height || 100}px`
      }));
    }
    response.svg = this.graphviz.layout(
      response.dot ?? "",
      "svg",
      engine,
      settings
    );
    if (removeProlog) {
      response.svg = response.svg?.replace(
        /<\?[ ]*xml[\S ]+?\?>[\s]*<![ ]*DOCTYPE[\S\s]+?\.dtd"[ ]*>/,
        ""
      );
    }
    if (
      request.images &&
      request.images.convertToDataUrls &&
      request.images.files
    ) {
      for (const image of Object.values(request.images.files)) {
        if (image.dataUrl) {
          const stringToReplace = new RegExp(image.path, "g");
          response.svg = response.svg?.replace(stringToReplace, image.dataUrl);
        }
      }
    }
    return response;
  };
}
