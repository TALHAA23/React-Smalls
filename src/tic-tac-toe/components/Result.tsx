import ReactConfetti from "react-confetti";
import { useRecord, useReset, useWinner } from "../hooks/WinnerProvider";
import { PLAYER1, PLAYER2 } from "../hooks/TurnAndToggleProvider";
import { useNavigate } from "react-router-dom";
export default function Result() {
  const navigate = useNavigate();
  const { winner } = useWinner();
  const reset = useReset();
  const record = Object.entries(useRecord());
  return (
    <section className=" absolute w-full h-screen bg-black/20 flex items-center justify-center">
      <ReactConfetti numberOfPieces={winner == PLAYER1.sign ? 100 : 50} />
      <div className="w-[90%] max-w-[900px] bg-black/90  py-12 rounded text-white text-center ">
        <h1 className=" text-5xl">{winnerTitle(winner)}</h1>
        <small>+{winner == PLAYER1.sign ? "10" : "0"} coins</small>
        <div className="grid grid-cols-2">
          {record.map(([title, value]) => (
            <>
              <p>
                {title == "draw"
                  ? "Draw"
                  : title == PLAYER1.sign
                  ? PLAYER1.title
                  : PLAYER2.title}
              </p>
              <p>{value as number}</p>
            </>
            // </div>
          ))}
        </div>
        {["Play Again", "New Game"].map((btn) => (
          <button
            onClick={() => {
              btn == "New Game" ? navigate(`..${location.search}`) : reset();
            }}
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

function winnerTitle(winner) {
  return winner == "draw"
    ? "Draw"
    : winner == PLAYER1.sign
    ? PLAYER1.title
    : PLAYER2.title;
}
