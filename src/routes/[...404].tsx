import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  const sadEmojis = ["😢", "😭", "😿", "🙀", "😞", "😟", "😕", "😣", "😖", "😫"];
  const randomSadEmoji = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
  return (
    <main class="flex gap-8 justify-center items-center w-full">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1 class="text-center text-6xl font-500">{randomSadEmoji}404</h1>
      <p>
        <span class="text-2xl font-500">Page Not Found</span>
        <br />
        <span class="text-base font-400">The page you are looking for does not exist.</span>
      </p>
    </main>
  );
}
