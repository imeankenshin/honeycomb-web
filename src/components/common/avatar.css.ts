import { style } from "@vanilla-extract/css";
import { colors } from "~/theme/colors.css";
import { rem } from "~/util/digit";

export const avatar = style({
  display: "inline-grid",
  placeItems: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  background: colors.red[400],
  objectFit: "cover"
});

export const smallSize = style({
  fontSize: rem(0.75),
  borderRadius: rem(0.375),
  width: rem(2),
  height: rem(2)
});
export const baseSize = style({
  fontSize: rem(1),
  borderRadius: rem(0.5),
  width: rem(2.5),
  height: rem(2.5)
});
export const largeSize = style({
  fontSize: rem(1.25),
  borderRadius: rem(0.75),
  width: rem(3),
  height: rem(3)
});
