import clsx from "clsx";
import { A, useMatch } from "solid-start";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";

type Props = {
  name: string;
  href?: string;
  icon?: string;
};

export default function SidebarLi(props: Props) {
  const match = useMatch(() => props.href || props.name.toLowerCase());
  return (
    <li >
      <A
        data-match={typeof match() !== "undefined"}
        class={clsx(
          "group",
          css({
            display: "flex",
            px: "2",
            alignItems: "center",
            gap: "2",
            borderRadius: "lg",
            height: "2.5rem",
            "&[data-match=true]": {
              backgroundColor: "warmGray.300"
            }
          })
        )}
        href={props.href || props.name.toLowerCase()}
      >
        <span
          translate="no"
          class={clsx(
            "material-symbols-rounded",
            css({
              userSelect: "none",
              transition: "all",
              _groupHover: {
                scale: 1.1
              }
            })
          )}
        >
          {props.icon || props.name.toLowerCase()}
        </span>
        <styled.span fontWeight={500}>{props.name}</styled.span>
      </A>
    </li>
  );
}
