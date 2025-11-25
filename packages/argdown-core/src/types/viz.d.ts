// Type declarations for @aduh95/viz.js
// This resolves module resolution issues with the exports field in package.json

declare module "@aduh95/viz.js/sync" {
  export default function renderStringSync(
    src: string,
    options?: {
      format?: string;
      engine?: string;
      files?: Array<{ path: string; data: string }>;
      images?: Array<{ path: string; width: number; height: number }>;
      yInvert?: boolean;
      nop?: number;
    }
  ): string;
}

declare module "@aduh95/viz.js" {
  export interface RenderOptions {
    format?: string;
    engine?: string;
    files?: Array<{ path: string; data: string }>;
    images?: Array<{ path: string; width: number; height: number }>;
    yInvert?: boolean;
    nop?: number;
  }
}
