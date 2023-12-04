import { A, useMatch } from "solid-start";

type Props = {
  name: string;
  href?: string;
  icon?: string;
};

export default function SidebarLi(props: Props) {
  const match = useMatch(() => props.href || props.name.toLowerCase());
  return (
    <li data-match={Boolean(match())}>
      <A
        class="flex group items-center gap-2  rounded-2 h-12"
        href={props.href || props.name.toLowerCase()}
      >
        <span
          translate="no"
          class="select-none group-hover:scale-110 transition material-symbols-rounded"
        >
          {props.icon || props.name.toLowerCase()}
        </span>
        <span class="text-base font-500">{props.name}</span>
      </A>
    </li>
  );
}
