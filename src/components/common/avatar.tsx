import { JSX, Show } from "solid-js";
import { getInitial } from "~/util/string";
import { css } from "styled-system/css";
import { square } from "styled-system/patterns";

const avatar = css({
    display: "inline-grid",
    placeItems: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    background: "red.400",
    objectFit: "cover"
  }),
  smallSize = square({
    fontSize: "0.75rem",
    borderRadius: "sm",
    size: "2rem"
  }),
  baseSize = square({
    fontSize: "1rem",
    borderRadius: "md",
    size: "2.5rem"
  }),
  largeSize = square({
    fontSize: "1.5rem",
    borderRadius: "lg",
    size: "3rem"
  });

type Props = {
  name: string;
  fallback?: JSX.Element;
  size?: "sm" | "md" | "lg";
  image?: string;
};

export default function Avatar(props: Props) {
  const classList = () => ({
    [smallSize]: props.size === "sm",
    [baseSize]: props.size === "md" || !props.size,
    [largeSize]: props.size === "lg"
  });
  return (
    <Show
      when={props.image}
      fallback={
        props.fallback || (
          <span classList={classList()} class={avatar} translate="no">
            {getInitial(props.name)}
          </span>
        )
      }
    >
      <img
        classList={classList()}
        class={avatar}
        src={props.image}
        alt={`Avatar for ${props.name}`}
      />
    </Show>
  );
}
