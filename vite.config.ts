import solid from "solid-start/vite";
import unoCSS from "unocss/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [unoCSS(), solid({ ssr: "streaming" })],
  resolve: {
    alias: {
      "styled-system": path.resolve(__dirname, "./styled-system/")
    }
  }
});
