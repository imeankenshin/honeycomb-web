// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title
} from "solid-start";
import SideBar from "./components/organisms/sidebar";
import { UserProfileProvider } from "./contexts/user-profile";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./root.css";
import "./theme/colors.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0"
        />
      </Head>
      <Body>
        <Suspense fallback={<p>Loading</p>}>
          <UserProfileProvider>
            <ErrorBoundary>
              <SideBar />
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </UserProfileProvider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
