import { select } from "d3-selection";
import "d3-transition";
import {
  CanSelectNode,
  OnSelectionChangedHandler,
  OnZoomChangedHandler,
  ZoomManager
} from ".";

/**
 * Provide an SVG container and optional onZoomChanged and onSelectionChanged handlers to create an SvgMapView.
 *
 * If you call the render method with an SVG string the svg will get rendered inside the container and zoom/pan
 * functionality will be added.
 *
 * Using the selectNode and deselectNode methods you can programmatically select and deselect nodes inside the SVG.
 */

export class SvgMapView implements CanSelectNode {
  private zoomManager: ZoomManager;
  private svgContainer: HTMLElement;
  private selectedElement?: SVGGraphicsElement | null;
  private selectedElementStrokeWidth?: string;
  private onSelectionChanged?: OnSelectionChangedHandler;

  constructor(
    svgContainer: HTMLElement,
    onZoomChanged?: OnZoomChangedHandler,
    onSelectionChanged?: OnSelectionChangedHandler
  ) {
    this.svgContainer = svgContainer;
    this.zoomManager = new ZoomManager(onZoomChanged, true);
    this.onSelectionChanged = onSelectionChanged;
  }

  render(
    svgString: string,
    props: {
      position?: { x?: number; y?: number };
      scale?: number;
      selectedNode?: string | null;
    }
  ) {
    if (!svgString) {
      return;
    }

    this.svgContainer.innerHTML = svgString;
    const svg = select<HTMLElement, null>(
      this.svgContainer
    ).select<SVGSVGElement>("svg");

    if (!svg.node()) {
      return;
    }
    svg.attr("class", "map-svg");
    svg.attr("width", "100%");
    svg.attr("height", "100%");
    svg.attr("viewBox", null);

    const svgGraph = svg.select<SVGGraphicsElement>("g");
    const groupNode: SVGGraphicsElement | null = svgGraph.node();
    if (!groupNode) {
      return;
    }

    const bBox = groupNode.getBBox();
    const width = bBox.width;
    const height = bBox.height;

    this.zoomManager.init(svg, svgGraph, width, height);
    if (!props.scale || !props.position) {
      this.zoomManager.showAllAndCenterMap();
    } else {
      this.zoomManager.setZoom(
        props.position.x || 0,
        props.position.y || 0,
        props.scale,
        0
      );
    }
    svgGraph.attr(
      "height",
      this.zoomManager.state.size.height * this.zoomManager.state.scale + 40
    );
    if (props.selectedNode) {
      this.selectNode(props.selectedNode);
    } else {
      this._deselectNode();
    }
  }

  getNodeWithArgdownId(id: string): SVGGraphicsElement | undefined {
    const nodes = this.zoomManager.svgGraph
      ?.selectAll("g.node")
      .nodes() as SVGGraphicsElement[];
    return nodes.find((n) => this.getArgdownId(n) === id);
  }

  getArgdownId(node: SVGGraphicsElement): string {
    const title = select(node).select<SVGTitleElement>("title").node();
    if (title) {
      return title.textContent || "";
    }
    return "";
  }

  deselectNode() {
    this._deselectNode();
    if (this.onSelectionChanged) {
      this.onSelectionChanged(null);
    }
  }

  private _deselectNode(): void {
    if (this.selectedElement) {
      this.selectedElement.classList.remove("selected");
      const path = this.selectedElement.getElementsByTagName("path")[0];
      path.setAttribute("stroke-width", this.selectedElementStrokeWidth || "");
    }
    this.selectedElement = null;
  }

  selectNode(id: string): void {
    this._deselectNode();
    this.selectedElement = this.getNodeWithArgdownId(id);
    if (this.selectedElement) {
      const path = this.selectedElement.getElementsByTagName("path")[0];
      this.selectedElement.classList.add("selected");
      this.selectedElementStrokeWidth = path.getAttribute("stroke-width") || "";
      path.setAttribute("stroke-width", "8");
      this.zoomManager.moveToElement(this.selectedElement);
      if (this.onSelectionChanged) {
        this.onSelectionChanged(id);
      }
    }
  }
}
