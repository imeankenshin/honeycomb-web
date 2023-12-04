import { createContext, useContext } from "solid-js";

type UserStatus = "online" | "offline" | "idle";

type UserProfileContextType = {
  name: string;
  status: UserStatus;
  image?: string;
};

const userProfileContext = createContext<UserProfileContextType>({
  name: "Beluga",
  status: "online",
  image: "/icon.png"
});

export function UserProfileProvider(props: { children: any }) {
  return (
    <userProfileContext.Provider value={{ name: "Beluga", image: "/icon.jpeg", status: "online" }}>
      {props.children}
    </userProfileContext.Provider>
  );
}

export function useUserProfile() {
  return useContext(userProfileContext);
}
