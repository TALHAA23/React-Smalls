export default function ShopShowcase() {
  const showcaseBox = Array(9).fill(
    <div className="shadow-lg border border-transparent hover:border-black/30"></div>
  );
  return (
    <div className="absolute bottom-2 right-2 p-2 w-[150px] sm:w-[250px] aspect-square border-dotted border-[7px] border-black grid grid-cols-3 grid-rows-3">
      {showcaseBox}
    </div>
  );
}
