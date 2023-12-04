import { Show, createSignal, onMount } from "solid-js";
import { Title as _Title, useLocation } from "solid-start";

export default function Title(props: { children: string }) {
  const [isHidden, setIsHidden] = createSignal(true);
  const backLocation = useLocation().pathname.split("/").slice(0, -1).join("/");
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
        classList={{
          "-translate-y-16": isHidden()
        }}
        inert={isHidden()}
        class="w-full flex items-center items-center -mb-8 top-0 left-0 justify-center p-4 shadow sticky transition bg-warmGray-50/90 backdrop-blur z-99"
      >
        <Show when={backLocation}>
          <a
            href={backLocation}
            class="material-symbols-rounded grid place-items-center text-center"
          >
            arrow_back
          </a>
        </Show>
        <h2 class="w-full text-center font-500">{props.children}</h2>
      </nav>
      <h1 ref={navRef} class="text-6xl font-500 m-8">
        {props.children}
      </h1>
    </>
  );
}
