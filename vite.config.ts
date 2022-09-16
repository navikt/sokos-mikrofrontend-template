import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { terser } from "rollup-plugin-terser";
import { ConfigEnv } from "vite";
import viteCompression from "vite-plugin-compression";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { viteMockServe } from "vite-plugin-mock";
import { UserConfigExport } from "vitest/config";

const reactUrl = "https://www.dev.nav.no/tms-min-side-assets/react/18/esm/index.js";
const reactDomUrl = "https://www.dev.nav.no/tms-min-side-assets/react-dom/18/esm/index.js";

const imports = {
  react: reactUrl,
  "react-dom": reactDomUrl,
};

export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    viteCompression({
      algorithm: "gzip",
    }),
    viteCompression({
      algorithm: "brotliCompress",
    }),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin([{ imports }]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/Mikrofrontend.tsx"),
      name: "sokos-mikrofrontend-template",
      formats: ["es"],
      fileName: () => `bundle.js`,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
    coverage: {
      provider: "c8",
    },
  },
});
