import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const packageName = "packageName";

export default defineConfig({
  plugins: [
    dts({
      include: ["src"],
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: packageName,
      fileName: "index"
    }
  }
});
