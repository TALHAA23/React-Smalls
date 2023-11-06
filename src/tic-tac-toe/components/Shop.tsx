import { useState, ReactElement } from "react";
import ShopShowcase from "./ShopShowcase";
import boards from "../shop/boards";
import markers from "../shop/markers";
import {
  useBoardTheme,
  useMarkerTheme,
  useThemeChanger,
} from "../hooks/ThemeProvider";
import { Catagory } from "../assets/type";

interface Showcase {
  catagory: Catagory;
  resourse: string | ReactElement[];
}

const ALL = [...boards, ...markers];

function Tag(props: { text: string }) {
  return (
    <div className=" absolute top-1 right-1 text-sm font-sans font-semibold px-2 py-1 bg-slate-700 text-white scale-x-0 origin-right transition-transform duration-200 group-hover:scale-100">
      {props.text}
    </div>
  );
}

function PriceTag(props: { price: number }) {
  return (
    <div className=" absolute bottom-1 left-1 bg-slate-600 text-slate-400 px-3 py-2 rounded-sm">
      {props.price} Coins
    </div>
  );
}
function NameTag(props: { text: string }) {
  return (
    <div className="absolute right-0 -bottom-7 bg-slate-600 font-sans uppercase text-sm px-1 opacity-0 text-white font-semibold transition-all duration-200 group-hover:opacity-80 group-hover:translate-y-2">
      {props.text}
    </div>
  );
}
export default function Shop() {
  const [showcase, setShowcase] = useState<Showcase>({
    catagory: "board",
    resourse: "border",
  });
  const updateTheme = useThemeChanger();
  const components = ALL.map((theme) => (
    <div
      onClick={() => updateTheme(theme.catagory, theme.resource)}
      onMouseEnter={() =>
        setShowcase({
          catagory: theme.catagory,
          resourse: theme.resource,
        })
      }
      className={`group shadow-xl aspect-square relative p-7 ${
        theme.catagory == "marker" && "flex items-center justify-center"
      }
      relative before:absolute before:-right-1 before:-top-1 before:w-3 before:aspect-square before:rounded-full before:bg-gradient-to-br before:from-green-300 before:to-green-700 before:scale-0 before:transition-transform before:duration-200 before:ease-[cubic-bezier(0.63,-0.1, 0, 1.76)]
      ${
        theme.resource == useBoardTheme() || theme.resource == useMarkerTheme()
          ? "before:scale-100"
          : ""
      }
      `}
    >
      {theme.catagory == "board" ? (
        <div className={`${theme.resource} aspect-square`}></div>
      ) : (
        theme.resource
      )}
      <Tag text={theme.catagory} />
      <PriceTag price={theme.price} />
      <NameTag text={theme.title} />
    </div>
  ));
  return (
    <section className="relative w-full min-h-screen p-8 font-[playPretend] bg-slate-800 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-11">
      {components}
      <ShopShowcase {...showcase} />
    </section>
  );
}
