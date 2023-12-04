import { For, Show } from "solid-js";
import Skeleton from "~/components/common/skeleton";
import Title from "~/components/common/title";
import NewSpaceItem from "~/components/organisms/new-space-item";
import SpaceItem from "~/components/organisms/space-item";

export default function Home() {
  const spaces = Array.from({ length: 4 });
  return (
    <main class="flex flex-col w-full h-screen overflow-y-auto">
      <Title>Home</Title>
      <div class="flex w-f flex-wrap mx-auto p-8 pt-0 gap-4">
        <For each={spaces} fallback={<p>Its's so empty here.</p>}>
          {() => (
            <SpaceItem
              id="a"
              name="ABC High School"
              description="A school for the best of the best"
              image="/camp.png"
            />
          )}
        </For>
        <Show when={spaces.length > 0}>
          <NewSpaceItem />
        </Show>
        <article class="bg-warmGray-2 ring ring-warmGray-3 h-64 flex flex-col max-w-sm w-full w-full transition rounded-3">
          <div class="flex h44 relative select-none">
            <Skeleton class="wfull hfull object-cover pointer-events-none rounded-none rounded-t-3" />
            <Skeleton class="absolute w-12 -bottom-3 border-4 border-solid border-warmGray-2 rounded-lg mx3 aspect-square grid place-items-center" />
          </div>
          <div class="p4">
            <Skeleton class="m-0 h-5 mb-1 text-base mr-1 font-500 w-10 inline-flex" />
            <Skeleton class="m-0 h-5 mb-1 text-base font-500 w-20 inline-flex" />
            <Skeleton class="h-4 line-clamp-1 text-warmGray-5" />
          </div>
        </article>
      </div>
    </main>
  );
}
