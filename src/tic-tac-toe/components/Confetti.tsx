import ReactConfetti from "react-confetti";
import { useRecord, useReset } from "../hooks/WinnerProvider";
export default function Confetti() {
  const reset = useReset();
  const record = Object.entries(useRecord());
  return (
    <section className=" absolute w-full h-screen bg-black/20 flex items-center justify-center">
      <ReactConfetti numberOfPieces={50} />
      <div className="w-[90%] bg-black/90  py-12 rounded text-white text-center ">
        <h1 className=" text-5xl">Player 1</h1>
        <small>+10 Coins</small>
        <div className="grid grid-cols-2">
          {record.map(([title, value]) => (
            // <div className="flex justify-around border-y border-gray-400">
            <>
              <p>{title == "X" ? "Player 01" : "Player 02"}</p>
              <p>{value}</p>
            </>
            // </div>
          ))}
        </div>
        {["New Game", "Play Again"].map((btn) => (
          <button
            onClick={() => reset()}
            className={`mx-auto my-2 block w-full max-w-[400px] text-center border-red-300 border-2 py-3 rounded ${
              btn == "New Game" ? "hover:bg-blue-500" : "hover:bg-red-400"
            }
          `}
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
}
