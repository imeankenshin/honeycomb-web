import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";

export default function NewSpaceItem() {
  return (
    <article
      class={css({
        borderWidth: 1,
        borderStyle: "dotted",
        borderColor: "pantone.400",
        gap: "2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64",
        flexFlow: "column",
        minWidth: "sm",
        maxWidth: "xs",
        width: "full",
        transition: "all",
        borderRadius: "lg"
      })}
    >
      <styled.span translate="no" class="material-symbols-rounded" userSelect="none">
        add
      </styled.span>
      <styled.span textAlign="center">Add a new space</styled.span>
    </article>
  );
}
