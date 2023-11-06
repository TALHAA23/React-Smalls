export default function ShopShowcase(props) {
  console.log(props.resourse);
  const showcaseBox = Array(9).fill(
    <div className="relative shadow-lg border border-rose-500 hover:border-black/30">
      {props.catagory == "marker" && props.resourse[0]}
    </div>
  );
  return (
    <div
      className={`  fixed z-50 right-2 bottom-2 p-2 w-[150px] sm:w-[250px] aspect-square bg-white/20 border-4 border-black shadow-2xl shadow-slate-500 grid grid-cols-3 grid-rows-3 hover:bg-white/50 
   ${props.catagory == "board" ? props.resourse : ""}`}
    >
      {showcaseBox}
    </div>
  );
}
