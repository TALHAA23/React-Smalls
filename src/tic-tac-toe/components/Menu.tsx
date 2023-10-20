import { Link } from "react-router-dom";
export default function Menu() {
  const menu = [
    ["Play", "matchmaking"],
    ["Shop", "shop"],
    ["Equipments", "equipments"],
  ];

  return (
    <div className="w-[90%] sm:w-[500px] border border-black px-2 py-4 flex flex-col gap-1">
      {menu.map(([title, link]) => {
        return (
          <Link
            to={link}
            className=" w-full border border-green-300 text-center py-2 group"
          >
            <p className=" group-hover:text-rose-800">{title}</p>
          </Link>
        );
      })}
    </div>
  );
}
