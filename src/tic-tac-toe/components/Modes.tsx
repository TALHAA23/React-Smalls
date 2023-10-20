import { Link } from "react-router-dom";

export default function Modes() {
  const modes = [
    { name: "2P", desc: "Play with real friend", q: "2p" },
    { name: "Computer", desc: "Compeite against computer", q: "comp" },
  ];
  return (
    <div className="w-[90%] max-w-[500px] border border-black flex justify-center gap-3">
      {modes.map((mode) => (
        <Link to={`?mode=${mode.q}`}>
          <h1 className="text-center text-4xl">{mode.name}</h1>
          <p>{mode.desc}</p>
        </Link>
      ))}
    </div>
  );
}
