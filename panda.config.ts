import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          pantone: {
            value: "pantone.400",
            extensions: {
              50: "#fafaf9",
              100: "#f5f5f4",
              200: "#e7e5e4",
              300: "#d6d3d1",
              400: "#a8a29e",
              500: "#78716c",
              600: "#57534e",
              700: "#44403c",
              800: "#292524",
              900: "#1c1917"
            }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system"
});
