import { Show, createSignal, onMount } from "solid-js";
import { Title as _Title, useLocation } from "solid-start";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";

export default function Title(props: { children: string }) {
  const [isHidden, setIsHidden] = createSignal(true);
  const backLocation = useLocation().pathname.split("/").slice(0, -1).join("/");
  // eslint-disable-next-line prefer-const
  let navRef: HTMLHeadingElement | undefined = undefined;
  onMount(() => {
    document.getElementsByTagName("main")[0].addEventListener("scroll", () => {
      if (navRef) setIsHidden(navRef.getBoundingClientRect().bottom > 0);
    });
  });
  return (
    <>
      <_Title>{/*@once*/ props.children} - Honeycomb</_Title>
      <nav
        style={{
          "--local-y": isHidden() ? "-4rem" : 0
        }}
        inert={isHidden()}
        class={css({
          position: "sticky",
          w: "full",
          top: 0,
          left: 0,
          zIndex: 99,
          opacity: 0.9,
          bgColor: "pantone.100",
          backdropFilter: "blur(16px)",
          transform: "translateY(var(--local-y))",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-4rem",
          transition: "all",
          shadow: "sm"
        })}
      >
        <Show when={backLocation}>
          <a
            href={backLocation}
            class="material-symbols-rounded grid place-items-center text-center"
          >
            arrow_back
          </a>
        </Show>
        <styled.h2 fontWeight={500} textAlign="center" w="full">
          {props.children}
        </styled.h2>
      </nav>
      <styled.h1 ref={navRef} textAlign="start" fontSize="6xl" fontWeight={500} m="8">
        {props.children}
      </styled.h1>
    </>
  );
}
