import { IRequestHandler, SyncDotToSvgExportPlugin } from "@argdown/core";
import { Graphviz } from "@hpcc-js/wasm-graphviz";
import {
  IAsyncArgdownPlugin,
  IAsyncRequestHandler
} from "../IAsyncArgdownPlugin.js";

export class AsyncSvgExportPlugin implements IAsyncArgdownPlugin {
  private syncPlugin: SyncDotToSvgExportPlugin | undefined;

  runAsync: IAsyncRequestHandler = async (request, response, logger) => {
    // Load graphviz async one time and create sync plugin instance
    if (!this.syncPlugin) {
      const graphviz = await Graphviz.load();
      this.syncPlugin = new SyncDotToSvgExportPlugin(graphviz);
    }
    this.prepare = this.syncPlugin.prepare;

    return this.syncPlugin.run(request, response, logger);
  };
  prepare: undefined | IRequestHandler;
  name: string = "AsyncSvgExportPlugin";
}
