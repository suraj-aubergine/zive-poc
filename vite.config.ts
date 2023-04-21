import { defineConfig, loadEnv } from "vite";
import viteCompression from "vite-plugin-compression";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";
import preload from "vite-plugin-preload";
import tsconfigPaths from "vite-tsconfig-paths";

import commonjs from "@rollup/plugin-commonjs";
import react from "@vitejs/plugin-react";

export default async ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return await defineConfig({
    plugins: [
      react({
        jsxRuntime: "automatic",
      }),
      tsconfigPaths(),
      commonjs(),
      viteCompression({
        algorithm: "gzip",
        compressionOptions: {
          chunkSize: 1600,
        },
      }),
      preload(),
      imagePresets({
        thumbnail: widthPreset({
          loading: "lazy",
          widths: [48, 96],
          formats: {
            webp: { quality: 50 },
            jpg: { quality: 70 },
          },
        }),
      }),
    ],
    build: {
      minify: true,
      commonjsOptions: { include: [] },
      cssMinify: true,
      cssCodeSplit: true,
    },
    preview: {
      port: 5173,
    },
  });
};
