import solid from "solid-start/vite";
import unoCSS from "unocss/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    unoCSS(),
    solid({ ssr: "streaming" }),
    vanillaExtractPlugin({
      emitCssInSsr: true,
      identifiers: ({ hash }) => `vex_${hash}`
    })
  ]
});
