import Avatar from "~/components/common/avatar";
import { Tab, TabField, TabList, TabPanel } from "~/components/common/tabs";
import Title from "~/components/common/title";

export default function Space() {
  const filledButton =
    "flex-1 w-full flex justify-center items-center gap-2 font-500 aria-selected:bg-warmgray-900 outline-none aria-selected:text-warmgray-50 focus-visible:ring-2 ring-offset-warmgray-300 transition focus-visible:ring-offset-3 ring-warmgray-900 h-10 rounded-lg";
  return (
    <main class="flex flex-col w-full overflow-y-scroll">
      <Title>ABC High School</Title>
      <p class="mx-8">A school for the best of the best</p>
      <TabField class="flex flex-col gap-2 p-6 w-full max-w-6xl" defaultValue="home">
        <TabList class="flex gap-2 p-1.5 rounded-3.5 overflow-y-auto bg-warmGray-200">
          <Tab value="home" class={filledButton}>
            <span class="material-symbols-rounded select-none" translate="no">
              home
            </span>
            <span class="max-md:hidden">Home</span>
          </Tab>
          <Tab value="channels" class={filledButton}>
            <span class="material-symbols-rounded select-none" translate="no">
              tag
            </span>
            <span class="max-md:hidden">Channels</span>
          </Tab>
          <Tab value="forums" class={filledButton}>
            <span class="material-symbols-rounded select-none" translate="no">
              forum
            </span>
            <span class="max-md:hidden">Forums</span>
          </Tab>
          <Tab value="members" class={filledButton}>
            <span class="material-symbols-rounded select-none" translate="no">
              people
            </span>
            <span class="max-md:hidden">Members</span>
          </Tab>
        </TabList>
        <TabPanel value="home" class="bg-warmGray-200 rounded-3.5 p-8">
          <p>Home</p>
        </TabPanel>
        <TabPanel value="channels" class="bg-warmGray-200 rounded-3.5 p-8">
          <p>Channels</p>
        </TabPanel>
        <TabPanel value="forums" class="bg-warmGray-200 rounded-3.5 p-8">
          <p>Forums</p>
        </TabPanel>
        <TabPanel value="members" class="bg-warmGray-200 rounded-3.5 p-8">
          <div class="flex gap-8">
            <Avatar size="lg" name="Beluga" />
            <Avatar size="lg" name="Hecker" />
            <Avatar size="lg" name="skittle" />
            <Avatar size="lg" name="skittle-chan" />
            <Avatar size="lg" name="Pablo" />
          </div>
        </TabPanel>
      </TabField>
    </main>
  );
}
