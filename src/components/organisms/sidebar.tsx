import { styled } from "styled-system/jsx";
import SidebarLi from "./sidebar/li";
import SidebarProfile from "./sidebar/profile";
import { css } from "styled-system/css"

export default function SideBar() {
  return (
    <aside
      class={css({
        display: {
          md: "flex",
          mdDown: "none"
        },
        flexDirection: "column",
        w: "full",
        maxWidth: "xs",
        padding: "1.5rem",
      })}
    >
      <styled.ul h="full">
        <SidebarLi name="Home" href="/" />
        <SidebarLi name="Direct Message" icon="forum" href="/dm" />
        <SidebarLi name="Inbox" />
        <SidebarLi name="Schedule" icon="event" />
      </styled.ul>
      <SidebarProfile />
    </aside>
  );
}
