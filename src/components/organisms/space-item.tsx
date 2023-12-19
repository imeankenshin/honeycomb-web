import { A } from "solid-start";
import { flex } from "styled-system/patterns";
import Avatar from "../common/avatar";
import { css } from "styled-system/css";

type Props = {
  name: string;
  description: string;
  image?: string;
  id: string;
};

const rootStyle = flex({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "warmGray.200",
  outlineWidth: 1,
  outlineStyle: "solid",
  outlineColor: "warmGray.300",
  height: "16rem",
  gap: 0,
  width: "full",
  maxWidth: "sm",
  _hover: {
    scale: 1.05
  },
  transition: "all",
  borderRadius: "0.75rem"
});

export default function SpaceItem(props: Props) {
  return (
    <article class={rootStyle}>
      <A
        href={`/s/${props.id}`}
        class={flex({ height: "11rem", position: "relative", userSelect: "none" })}
      >
        <img
          class={css({
            width: "full",
            height: "full",
            objectFit: "cover",
            pointerEvents: "none",
            borderTopRadius: "lg"
          })}
          src={props.image || "/camp.png"}
          alt={`Wallpaper for ${props.name}`}
        />
        <span
          class={css({
            position: "absolute",
            bottom: "-1.75rem",
            borderWidth: "0.25rem",
            borderStyle: "solid",
            borderColor: "warmGray.200",
            borderRadius: "lg",
            margin: "0.75rem"
          })}
        >
          <Avatar name={props.name} />
        </span>
      </A>
      <div class={css({ p: "1rem" })}>
        <h3 class={css({ fontWeight: 500 })}>{props.name}</h3>
        <p class={css({ lineClamp: 1, color: "warmGray.500", fontSize: "sm" })}>
          {props.description}
        </p>
      </div>
    </article>
  );
}
