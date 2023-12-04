import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./theme/colors.css";

globalStyle("body", {
  background: colors.pantone[50],
  color: colors.pantone[900],
  display: "flex",
  fontFamily: "IBM Plex Sans, sans-serif",
  height: "100vh"
});

globalStyle("code, pre", {
  fontFamily: "IBM Plex Mono, monospace"
});
