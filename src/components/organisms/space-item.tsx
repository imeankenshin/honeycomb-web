import { A } from "solid-start";
import { getInitial } from "~/util/string";

type Props = {
  name: string;
  description: string;
  image?: string;
  id: string;
};

export default function SpaceItem(props: Props) {
  return (
    <article class="bg-warmGray-2 ring ring-warmGray-3 h-64 flex flex-col max-w-sm w-full hover:scale-105 transition rounded-3">
      <A href={`/s/${props.id}`} class="flex h44 relative select-none">
        <img
          class="wfull hfull object-cover pointer-events-none rounded-t-3"
          src={props.image || "/camp.png"}
          alt={`Wallpaper for ${props.name}`}
        />
        <span class="absolute w-12 -bottom-3 border-4 border-solid border-warmGray-2 rounded-lg mx3 aspect-square grid place-items-center bg-red">
          {getInitial(props.name)}
        </span>
      </A>
      <div class="p4">
        <h3 class="m0 text-base font-500">{props.name}</h3>
        <p class="text-sm line-clamp-1 text-warmGray-5">{props.description}</p>
      </div>
    </article>
  );
}
