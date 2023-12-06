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
          ["pantone.50"]: {
            value: "#fafaf9"
          },
          ["pantone.100"]: {
            value: "#f5f5f4"
          },
          ["pantone.200"]: {
            value: "#e7e5e4"
          },
          ["pantone.300"]: {
            value: "#d6d3d1"
          },
          ["pantone.400"]: {
            value: "#a8a29e"
          },
          ["pantone.500"]: {
            value: "#78716c"
          },
          ["pantone.600"]: {
            value: "#57534e"
          },
          ["pantone.700"]: {
            value: "#44403c"
          },
          ["pantone.800"]: {
            value: "#292524"
          },
          ["pantone.900"]: {
            value: "#1c1917"
          }
        },
        sizes: {
          sm: {
            value: "24rem"
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system"
});
