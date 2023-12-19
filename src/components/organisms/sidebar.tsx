import { styled } from "styled-system/jsx";
import SidebarLi from "./sidebar/li";
import SidebarProfile from "./sidebar/profile";
import { flex } from "styled-system/patterns";

export default function SideBar() {
  return (
    <aside
      class={flex({
        display: {
          mdDown: "none"
        },
        direction: "column",
        w: "sm",
        backgroundColor: "warmGray.100",
        borderWidth: 1,
        borderStyle: "solid",
        padding: "1.5rem",
        borderColor: "warmGray.200"
      })}
    >
      <styled.ul h="full">
        <SidebarLi name="Home" href="/" />
        <SidebarLi name="Direct Message" icon="forum" href="/dm" />
        <SidebarLi name="Bookmark" />
        <SidebarLi name="Notifications" icon="inbox" />
        <styled.hr borderColor="warmGray.200" my="2" />
        <SidebarLi name="Todos" icon="checklist" />
        <SidebarLi name="Schedule" icon="event" />
      </styled.ul>
      <SidebarProfile />
    </aside>
  );
}
