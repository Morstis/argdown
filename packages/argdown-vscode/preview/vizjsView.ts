import { select } from "d3-selection";
import { onceDocumentLoaded } from "./events";
import { createPosterForVsCode } from "./messaging";
import { getSettings } from "./settings";
import throttle from "lodash.throttle";
import { initMenu } from "./menu";
import { getPngAsString } from "./export";
import { openScaleDialog } from "./scaleDialog";
import {
  SvgMapView,
  OnZoomChangedHandler,
  OnSelectionChangedHandler
} from "@argdown/map-views";
import { ArgdownPreviewStore } from "./state";

declare var acquireVsCodeApi: any;
const vscode = acquireVsCodeApi();
vscode.postMessage({});

const store = new ArgdownPreviewStore(vscode);

const messagePoster = createPosterForVsCode(vscode);
initMenu(messagePoster);

window.cspAlerter.setPoster(messagePoster);
window.styleLoadingMonitor.setPoster(messagePoster);

const previewSettings = getSettings();

const onZoomChanged: OnZoomChangedHandler = throttle((data) => {
  store.transformState((s) => {
    s.vizJs.scale = data.scale;
    s.vizJs.position = data.position;
    return s;
  });
}, 50);
const onSelectionChanged: OnSelectionChangedHandler = (id) => {
  store.transformState((s) => {
    s.selectedNode = id;
    return s;
  });
};

const svgContainer = document.getElementById("svg-container")!;
let svgMap: SvgMapView | null = null;

const updateMap = () => {
  const {
    selectedNode,
    vizJs: { svg, position, scale }
  } = store.getState();
  if (svg && svgMap) {
    svgMap.render(svg, {
      selectedNode,
      position,
      scale
    });
  }
};
onceDocumentLoaded(() => {
  svgMap = new SvgMapView(svgContainer, onZoomChanged, onSelectionChanged);
  updateMap();
});

window.addEventListener(
  "message",
  (event) => {
    if (event.data.source !== previewSettings.source) {
      return;
    }

    switch (event.data.type) {
      case "didChangeTextDocument":
        const svg = event.data.svg;
        store.transformState((s) => {
          s.vizJs.svg = svg;
          return s;
        });
        updateMap();
        break;
      case "didSelectMapNode":
        if (previewSettings.syncPreviewSelectionWithEditor) {
          const id = event.data.id;
          svgMap?.selectNode(id);
        }
        break;
    }
  },
  false
);

document.addEventListener("dblclick", (event) => {
  if (!previewSettings.doubleClickToSwitchToEditor) {
    return;
  }
  // Ignore clicks on links
  for (
    let node = event.target as Element;
    node;
    node = node.parentNode as Element
  ) {
    if (node.tagName && node.tagName === "g" && node.classList) {
      if (node.classList.contains("node")) {
        const g = <SVGGraphicsElement>node;
        const id = svgMap?.getArgdownId(g);
        if (!id) {
          return;
        }
        svgMap?.selectNode(id);
        messagePoster.postMessage("didSelectMapNode", { id });
        return;
      } else if (node.classList.contains("cluster")) {
        const heading = select(node)
          .selectAll<SVGTextElement, null>("text")
          .nodes()!
          .reduce(
            (acc: string, val: SVGTextElement) => acc + val.textContent,
            ""
          );
        messagePoster.postMessage("didSelectCluster", { heading });
        return;
      }
    } else if (node.tagName === "A") {
      return;
    }
  }
});

document.addEventListener(
  "click",
  (event) => {
    if (!event) {
      return;
    }

    let node: any = event.target;
    while (node) {
      if (node.tagName && node.tagName === "A" && node.href) {
        if (node.dataset.command) {
          const command = node.dataset.command;
          if (command === "argdown.exportDocumentToVizjsSvg") {
            messagePoster.postCommand(command, [previewSettings.source]);
          } else if (command === "argdown.copyWebComponentToClipboard") {
            messagePoster.postCommand(command, [previewSettings.source]);
          } else if (command === "argdown.exportDocumentToVizjsPdf") {
            messagePoster.postCommand(command, [previewSettings.source]);
          } else if (command === "argdown.exportContentToVizjsPng") {
            openScaleDialog((scale) => {
              var svgContainer = document.getElementById("svg-container")!;
              const svgEl: SVGSVGElement =
                svgContainer.getElementsByTagName("svg")[0];
              getPngAsString(svgEl, scale, "", (pngString) => {
                messagePoster.postCommand(command, [
                  previewSettings.source,
                  pngString
                ]);
              });
            });
          }
          event.preventDefault();
          event.stopPropagation();
          break;
        }
        if (node.getAttribute("href").startsWith("#")) {
          break;
        }
        if (
          node.href.startsWith("file://") ||
          node.href.startsWith(previewSettings.cspSource)
        ) {
          const regex = new RegExp(
            `^(file:\/\/|${previewSettings.cspSource})`,
            "i"
          );
          const [path, fragment] = node.href.replace(regex, "").split("#");
          messagePoster.postCommand("_markdown.openDocumentLink", [
            { path, fragment }
          ]);
          event.preventDefault();
          event.stopPropagation();
          break;
        }
        break;
      } else if (node.tagName && node.tagName.toLowerCase() === "svg") {
        svgMap?.deselectNode();
        break;
      }
      node = node.parentNode;
    }
  },
  true
);
