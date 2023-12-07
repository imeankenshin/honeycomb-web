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
            bottom: "-0.25rem",
            right: "-0.25rem",
            backgroundColor: "violet.500",
            size: "0.75rem",
            outlineWidth: 2,
            outlineStyle: "solid",
            outlineColor: "pantone.100",
            borderRadius: "sm"
          })}
        />
      </Flex>
      <styled.span fontWeight={500}>{userProfile.name}</styled.span>
    </HStack>
  );
}
