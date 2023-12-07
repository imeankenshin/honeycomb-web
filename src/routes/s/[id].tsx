import { css } from "styled-system/css";
import { HStack, styled } from "styled-system/jsx";
import { hstack, vstack } from "styled-system/patterns";
import Avatar from "~/components/common/avatar";
import { Tab, TabField, TabList, TabPanel } from "~/components/common/tabs";
import Title from "~/components/common/title";

const tabStyle = css({
    flex: "1",
    width: "full",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2",
    fontWeight: 500,
    "&[aria-selected=true]": {
      backgroundColor: "pantone.900",
      color: "pantone.50"
    },
    _focusVisible: {
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: "pantone.900",
      outlineOffset: 1
    },
    height: "10",
    borderRadius: "lg",
    transition: "all"
  }),
  tabPanelStyle = css({
    padding: "8",
    width: "full",
    bgColor: "pantone.200",
    borderRadius: "lg"
  });

export default function Space() {
  return (
    <styled.main display="flex" flexDir="column" w="full" overflowY="scroll">
      <Title>ABC High School</Title>
      <styled.p mx="8">A school for the best of the best</styled.p>
      <TabField
        class={vstack({
          gap: "2",
          p: "6",
          w: "full",
          maxW: "6xl"
        })}
        defaultValue="home"
      >
        <TabList
          class={hstack({
            gap: "2",
            w: "full",
            p: "1.5",
            bg: "pantone.200",
            borderRadius: "xl"
          })}
        >
          <Tab value="home" class={tabStyle}>
            <span class="material-symbols-rounded" translate="no">
              home
            </span>
            <styled.span display={{ mdDown: "none" }}>Home</styled.span>
          </Tab>
          <Tab value="channels" class={tabStyle}>
            <span class="material-symbols-rounded" translate="no">
              tag
            </span>
            <styled.span display={{ mdDown: "none" }}>Channels</styled.span>
          </Tab>
          <Tab value="forums" class={tabStyle}>
            <span class="material-symbols-rounded" translate="no">
              forum
            </span>
            <styled.span display={{ mdDown: "none" }}>Forums</styled.span>
          </Tab>
          <Tab value="members" class={tabStyle}>
            <span class="material-symbols-rounded" translate="no">
              people
            </span>
            <styled.span display={{ mdDown: "none" }}>Members</styled.span>
          </Tab>
        </TabList>
        <TabPanel value="home" class={tabPanelStyle}>
          <p>Home</p>
        </TabPanel>
        <TabPanel value="channels" class={tabPanelStyle}>
          <p>Channels</p>
        </TabPanel>
        <TabPanel value="forums" class={tabPanelStyle}>
          <p>Forums</p>
        </TabPanel>
        <TabPanel value="members" class={tabPanelStyle}>
          <HStack>
            <Avatar size="lg" name="Beluga" />
            <Avatar size="lg" name="Hecker" />
            <Avatar size="lg" name="skittle" />
            <Avatar size="lg" name="skittle-chan" />
            <Avatar size="lg" name="Pablo" />
          </HStack>
        </TabPanel>
      </TabField>
    </styled.main>
  );
}
