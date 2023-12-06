import { JSX, Show } from "solid-js";
import { getInitial } from "~/util/string";
import { css } from "styled-system/css";

const avatar = css({
    display: "inline-grid",
    placeItems: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    background: "red.400",
    objectFit: "cover"
  }),
  smallSize = css({
    fontSize: "0.75rem",
    borderRadius: "0.375rem",
    width: "2rem",
    height: "2rem"
  }),
  baseSize = css({
    fontSize: "1rem",
    borderRadius: "0.625rem",
    width: "2.5rem",
    height: "2.5rem"
  }),
  largeSize = css({
    fontSize: "1.5rem",
    borderRadius: "0.75rem",
    width: "3rem",
    height: "3rem"
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
