import { createGlobalTheme } from "@vanilla-extract/css";

export const colors = createGlobalTheme(":root", {
  pantone: {
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
  },
  red: {
    50: "#fdf2f2",
    100: "#fde8e8",
    200: "#fbd5d5",
    300: "#f8b4b4",
    400: "#f98080",
    500: "#f05252",
    600: "#e02424",
    700: "#c81e1e",
    800: "#9b1c1c",
    900: "#771d1d"
  }
});
