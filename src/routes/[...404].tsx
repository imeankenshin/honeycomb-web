import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import { styled } from "styled-system/jsx";

export default function NotFound() {
  const sadEmojis = ["😢", "😭", "😿", "🙀", "😞", "😟", "😕", "😣", "😖", "😫"];
  const randomSadEmoji = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
  return (
    <styled.main display="flex" gap={8} justifyContent="center" alignItems="center" w="full">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <styled.h1 textAlign="center" fontSize="6xl" fontWeight={500}>
        {randomSadEmoji}404
      </styled.h1>
      <p>
        <styled.span fontSize="2xl" fontWeight={500}>
          Page Not Found
        </styled.span>
        <br />
        <styled.span fontWeight={500}>The page you are looking for does not exist.</styled.span>
      </p>
    </styled.main>
  );
}
