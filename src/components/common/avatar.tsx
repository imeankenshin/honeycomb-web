import { JSX, Show } from "solid-js";
import { getInitial } from "~/util/string";
import { avatar, baseSize, largeSize, smallSize } from "./avatar.css";

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
