import { IMapState, defaultMapState } from "./IMapState.js";
import { zoom, ZoomBehavior, zoomIdentity } from "d3-zoom";
import { Selection } from "d3-selection";
import defaultsDeep from "lodash.defaultsdeep";

export type OnZoomChangedHandler = (data: {
  size: { width: number; height: number };
  scale: number;
  position: { x: number; y: number };
}) => void;
export class ZoomManager {
  zoom?: ZoomBehavior<SVGSVGElement, Record<string, never>>;
  svg?: Selection<
    SVGSVGElement,
    Record<string, never>,
    null | HTMLElement,
    any
  >;
  svgGraph?: Selection<
    SVGGraphicsElement,
    Record<string, never>,
    null | HTMLElement,
    any
  >;
  state: IMapState;
  moveToDuration: number;
  onZoomChanged?: OnZoomChangedHandler;
  graphIsBottomAligned: boolean;
  constructor(
    onZoomChanged?: OnZoomChangedHandler,
    graphIsBottomAligned: boolean = false,
    moveToDuration: number = 0.4
  ) {
    this.state = defaultsDeep({}, defaultMapState);
    this.onZoomChanged = onZoomChanged;
    this.moveToDuration = moveToDuration;
    this.graphIsBottomAligned = graphIsBottomAligned;
  }
  init(
    svg: Selection<SVGSVGElement, any, null | HTMLElement, any>,
    svgGraph: Selection<SVGGraphicsElement, any, null | HTMLElement, any>,
    width: number,
    height: number
  ) {
    this.state.size.width = width;
    this.state.size.height = height;

    this.svg = svg;
    this.svgGraph = svgGraph;
    this.zoom = zoom<SVGSVGElement, Record<string, never>>().on(
      "zoom",
      (event) => {
        // eslint-disable-next-line
        this.svgGraph!.attr("transform", event.transform);
        this.state.scale = event.transform.k;
        this.state.position.x = event.transform.x;
        this.state.position.y = event.transform.y;
        if (this.onZoomChanged) {
          this.onZoomChanged({
            scale: this.state.scale,
            position: this.state.position,
            size: this.state.size
          });
        }
      }
    );
    this.svg.call(this.zoom as any).on("dblclick.zoom", null);
  }
  showAllAndCenterMap() {
    if (!this.svg) {
      return;
    }
    const positionInfo = this.svg.node()!.getBoundingClientRect();
    const xScale = positionInfo.width / this.state.size.width;
    const yScale = positionInfo.height / this.state.size.height;
    const scale = Math.min(xScale, yScale);
    const x = (positionInfo.width - this.state.size.width * scale) / 2;
    const scaledHeight = this.state.size.height * scale;
    let y = (positionInfo.height - scaledHeight) / 2;
    if (this.graphIsBottomAligned) {
      y += scaledHeight;
    }
    this.setZoom(x, y, scale, 0);
  }
  resetZoom() {
    this.setZoom(
      this.state.position.x,
      this.state.position.y,
      this.state.scale,
      0
    );
  }
  moveTo(x: number, y: number) {
    this.setZoom(x, y, this.state.scale, this.moveToDuration);
  }
  moveToElement(element: SVGGraphicsElement) {
    const positionInfo = this.svg!.node()!.getBoundingClientRect();
    const svgNode = this.svg!.node();
    const svgGraphNode = this.svgGraph!.node();
    if (svgNode && svgGraphNode) {
      const point = convertCoordsL2L(svgNode, element, svgGraphNode);
      const x = -point.x * this.state.scale + positionInfo.width / 2;
      const y = -point.y * this.state.scale + positionInfo.height / 2;

      this.moveTo(x, y);
    }
  }
  setZoom = (x: number, y: number, scale: number, duration: number) => {
    if (!this.svg || !this.zoom) {
      return;
    }
    this.svg
      .transition()
      .duration(duration)
      .call(
        (this.zoom as any).transform,

        zoomIdentity.translate(x, y).scale(scale)
      );
  };
}
export const convertCoordsL2L = (
  svg: SVGSVGElement,
  fromElem: SVGGraphicsElement,
  toElem: SVGGraphicsElement
) => {
  const matrixL2G = fromElem.getCTM()!;
  const matrixG2L = toElem.getCTM()!.inverse();
  const bBox = fromElem.getBBox();
  const point = svg.createSVGPoint();
  point.x = bBox.x + bBox.width / 2;
  point.y = bBox.y + bBox.height / 2;
  return point.matrixTransform(matrixL2G).matrixTransform(matrixG2L);
};
