// Type declarations for @aduh95/viz.js
// This resolves module resolution issues with the exports field in package.json

declare module "@aduh95/viz.js" {
  export interface RenderOptions {
    format?: string;
    engine?: string;
    files?: Array<{ path: string; data: string }>;
    images?: Array<{ path: string; width: number; height: number }>;
    yInvert?: boolean;
    nop?: number;
  }

  export type VizConstructorOptionsWorkerURL = {
    workerURL: string | URL;
  };

  export type VizConstructorOptionsWorker = {
    worker: Worker; // For browser environments
  };

  export type VizConstructorOptions = VizConstructorOptionsWorkerURL | VizConstructorOptionsWorker;

  export default class Viz {
    constructor(options: VizConstructorOptions);
    renderString(src: string, options?: RenderOptions): Promise<string>;
  }
}