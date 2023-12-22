import { Flex, HStack, styled } from "styled-system/jsx";
import { square } from "styled-system/patterns";
import Avatar from "~/components/common/avatar";
import { useUserProfile } from "~/contexts/user-profile";

export default function SidebarProfile() {
  const userProfile = useUserProfile();
  return (
    <HStack gap={3} borderRadius="sm" height="3rem">
      <Flex position="relative">
        <Avatar name={userProfile.name} image={userProfile.image} />
        <span
          data-status={userProfile.status}
          title={userProfile.status}
          role="status"
          class={square({
            position: "absolute",
            bottom: "-0.5",
            right: "-0.5",
            size: "3",
            outlineWidth: 2,
            outlineStyle: "solid",
            outlineColor: "warmGray.100",
            borderRadius: "sm",
            "&[data-status=online]": {
              backgroundColor: "violet.500"
            },
            "&[data-status=offline]": {
              backgroundColor: "warmGray.500"
            },
            "&[data-status=idle]": {
              backgroundColor: "yellow.500"
            }
          })}
        />
      </Flex>
      <styled.span fontWeight={500}>{userProfile.name}</styled.span>
    </HStack>
  );
}
