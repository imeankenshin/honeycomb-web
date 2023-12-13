import { For, Show } from "solid-js";
import { HStack, styled } from "styled-system/jsx";
import Title from "~/components/common/title";
import NewSpaceItem from "~/components/organisms/new-space-item";
import SpaceItem from "~/components/organisms/space-item";

export default function Home() {
  const spaces = Array.from({ length: 4 });
  return (
    <styled.main display="flex" flexDirection="column" gap={0} w="full" h="screen" overflowY="auto">
      <Title>Home</Title>
      <HStack flexWrap="wrap" mx="auto" p="8" pt="0" gap={4}>
        <For each={spaces} fallback={<p>It&apos;s so empty here.</p>}>
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
      </HStack>
    </styled.main>
  );
}
