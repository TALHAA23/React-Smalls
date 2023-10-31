import ShopShowcase from "./ShopShowcase";
import boards from "../shop/boards";
import markers from "../shop/markers";
import { useBoardTheme, useThemeChanger } from "../hooks/ThemeProvider";

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
  const updateTheme = useThemeChanger();
  console.log(updateTheme);
  const components = ALL.map((theme) => (
    <div
      onClick={() => updateTheme(theme.catagory, theme.resource)}
      className={`group shadow-xl aspect-square relative ${
        theme.catagory == "marker" && "flex items-center justify-center"
      } ${theme.catagory != "board" && " border-4 border-blue-300"}
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
      <ShopShowcase />
    </section>
  );
}
