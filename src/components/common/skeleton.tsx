type Props = {
  class?: string;
};

export default function Skeleton(props: Props) {
  return <div class={`animate-pulse bg-gray-300 rounded-lg ${props.class}`} />;
}
