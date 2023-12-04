import Avatar from "~/components/common/avatar";
import { useUserProfile } from "~/contexts/user-profile";

export default function SidebarProfile() {
  const userProfile = useUserProfile();
  return (
    <div class="flex group items-center gap-2 rounded-2 p-0 h-12">
      <span class="relative flex">
        <Avatar name={userProfile.name} image={userProfile.image} />
        <span
          data-status={userProfile.status}
          title={userProfile.status}
          role="status"
          class="absolute -bottom-0.5 -right-0.5 bg-violet-5 w-3 h-3 outline-2 outline-solid outline-warmGray-100 rounded"
        />
      </span>
      <span class="text-base">{userProfile.name}</span>
    </div>
  );
}
