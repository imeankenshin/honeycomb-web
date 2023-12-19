import { styled } from "styled-system/jsx";

type Props = {
  class?: string;
};

export default function Skeleton(props: Props) {
  return (
    <styled.div
      class={props.class}
      animationName="pulse"
      animationDuration="1s"
      animationIterationCount="infinite"
      animationTimingFunction="ease-in-out"
      bgColor="warmGray.300"
      borderRadius="lg"
    />
  );
}
