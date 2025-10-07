import { ArgdownEngine } from "./ArgdownEngine";
import * as vscode from "vscode";
import { ArgdownPreviewConfiguration } from "./ArgdownPreviewConfiguration";
import { IArgdownPreviewState } from "./IArgdownPreviewState";
import { IViewProvider } from "./IViewProvider";
export const vizjsViewProvider: IViewProvider = {
  // full.render.js has to be loaded after vizJsView.js
  // scripts: ["vizjsView.js", "full.render.js"],
  scripts: ["vizjsView.js"],
  // eslint-disable-next-line @typescript-eslint/require-await
  generateView: async () => {
    return `<div id="svg-container"></div>`;
  },
  generateSubMenu: () => {
    return `<nav class="submenu">
	Export as <a data-command="argdown.exportDocumentToVizjsSvg" title="save as svg" href="#">svg</a> | <a data-command="argdown.exportContentToVizjsPng" title="save as png" href="#">png</a> | <a data-command="argdown.exportDocumentToVizjsPdf" title="save as pdf" href="#">pdf</a> | <a data-command="argdown.copyWebComponentToClipboard" title="copy to clipboard as web component" href="#">web component</a>
	</nav>`;
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  generateOnDidChangeTextDocumentMessage: async (
    argdownEngine: ArgdownEngine,
    argdownDocument: vscode.TextDocument,
    config: ArgdownPreviewConfiguration
  ) => {
    const { dot, request } = argdownEngine.exportDot(
      argdownDocument,
      config
    );
    const settings: any =
      config.argdownConfig && config.argdownConfig.vizJs
        ? { ...config.argdownConfig.vizJs }
        : {};
    if (request.images && request.images.files) {
      settings.images = Object.values(request.images.files);
    }
    const settingsStr = JSON.stringify(settings);
    return { dot, settings: settingsStr };
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  contributeToInitialState: async (
    data: IArgdownPreviewState,
    argdownEngine: ArgdownEngine,
    argdownDocument: vscode.TextDocument,
    config: ArgdownPreviewConfiguration
  ) => {
    const { dot, request } = argdownEngine.exportDot(
      argdownDocument,
      config
    );
    const settings: any =
      config.argdownConfig && config.argdownConfig.vizJs
        ? { ...config.argdownConfig.vizJs }
        : {};
    if (request.images && request.images.files) {
      settings.images = Object.values(request.images.files);
    }
    data.vizJs.dot = dot;
    data.vizJs.settings = settings;
    return data;
  }
};
