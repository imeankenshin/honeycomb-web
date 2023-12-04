import SidebarLi from "./sidebar/li";
import SidebarProfile from "./sidebar/profile";

export default function SideBar() {
  return (
    <aside class="border p-6 max-lg:hidden border-solid border-warmGray-2 min-w-xs flex bg-warmGray-100 flex-col">
      <ul class="h-full">
        <SidebarLi name="Home" href="/" />
        <SidebarLi name="Direct Message" icon="forum" href="/dm" />
        <SidebarLi name="Bookmark" />
        <SidebarLi name="Notifications" icon="inbox" />
        <hr class="border-warmGray-2 my-2" />
        <SidebarLi name="Todos" icon="checklist" />
        <SidebarLi name="Schedule" icon="event" />
      </ul>
      <SidebarProfile />
    </aside>
  );
}
