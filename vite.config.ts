import importMapPlugin from "@eik/rollup-plugin";
import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import EnvironmentPlugin from "vite-plugin-environment";
import { viteMockServe } from "vite-plugin-mock";

const reactUrl = "https://www.nav.no/tms-min-side-assets/react/18/esm/index.js";
const reactDomUrl =
  "https://www.nav.no/tms-min-side-assets/react-dom/18/esm/index.js";

export default defineConfig(({ mode }) => ({
  base: "/mikrofrontend",
  build: {
    lib: {
      entry: resolve(__dirname, "src/App.tsx"),
      name: "sokos-mikrofrontend-template",
      formats: ["es"],
      fileName: () => "bundle.js",
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  server:
    mode == "local-dev"
      ? {
          proxy: {
            "/mikrofrontend-api/api/v1/employee": {
              target: "http://localhost:8080",
              rewrite: (path: string) =>
                path.replace(/^\/mikrofrontend-api/, ""),
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : {},
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || "development",
    }),
    viteMockServe({
      mockPath: "mock",
      enable: mode === "local-mock",
    }),
    {
      ...importMapPlugin({
        maps: [
          {
            imports: {
              react: reactUrl,
              "react-dom": reactDomUrl,
            },
          },
        ],
      }),
      enforce: "pre",
      apply: "build",
    },
    terser(),
  ],
}));
