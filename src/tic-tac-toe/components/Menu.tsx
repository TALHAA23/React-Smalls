import { Link } from "react-router-dom";
export default function Menu() {
  const menu = [
    ["Play", "matchmaking"],
    ["Shop", "shop"],
    ["Equipments", "equipments"],
  ];

  return (
    <div className="w-[90%] sm:w-[500px] h-1/2 max-h-[600px] border border-black px-2 flex flex-col items-center justify-center gap-1 rounded-xl bg-black/80  shadow-2xl shadow-yellow-700/50">
      {menu.map(([title, link]) => {
        return (
          <Link
            to={link}
            className="group w-full text-white border border-yellow-700 text-center py-2 rounded-lg ring-0 ring-yellow-600 transition-all duration-200 hover:ring-4 hover:my-4 hover:-rotate-1 hover:even:rotate-1"
          >
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% to-yellow-500 to-80% transition-all duration-200 group-hover:tracking-[10px] group-hover:to-yellow-900 ">
              {title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
