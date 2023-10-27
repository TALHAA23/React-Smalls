import { Sign } from "../assets/type";
import Mark from "./Mark";
import { useToggleTurn, useTurn } from "../hooks/TurnAndToggleProvider";
import { MouseEvent, useRef } from "react";
import {
  useBoard,
  useBoardChangeHandler,
  useWinner,
} from "../hooks/WinnerProvider";
import Confetti from "./Confetti";
import readURL from "../assets/readURL";
import autoMove from "../assets/autoMove";
import updateUIforCurrentMove from "../assets/updateUIforCurrentMove";

export default function PlayBoard() {
  const winnerAttributes = useWinner();
  const turn = useTurn();
  const { grid } = readURL();
  const renderBoxes = [];
  for (let i = 0; i < grid; i++)
    for (let j = 0; j < grid; j++)
      renderBoxes.push(<Box key={`${i},${j}`} cords={`${i},${j}`} />);

  return (
    <section className="relative w-full h-screen flex items-center justify-center font-[playPretend]">
      <div
        className={`w-[90%] aspect-square max-w-[500px] ${
          turn.title == "Computer" && "opacity-50 pointer-events-none"
        }`}
      >
        <h1>
          {turn.title}:{turn.sign}
        </h1>
        <div
          className={`w-full h-full pointe p-1 border border-black grid gap-1`}
          style={{ gridTemplateColumns: `repeat(${grid},1fr)` }}
        >
          {renderBoxes}
        </div>
      </div>
      {winnerAttributes.isAnnounced && <Confetti />}
      {/* <Confetti /> */}
    </section>
  );
}

interface BoxProps {
  cords: string;
}

function Box(props: BoxProps) {
  const boxReverseCount = useRef(0);
  const [x, y] = props.cords.split(",");
  const turn = useTurn();
  const toogleTurn = useToggleTurn();
  const board = useBoard();
  const boardChangeHandler = useBoardChangeHandler();
  const currentCord: Sign = board[x][y];

  function markCurrentBox(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    toogleTurn();
    boardChangeHandler(target.id, turn.sign);
    updateUIforCurrentMove(target);
  }

  return (
    <div
      onClick={(e) => markCurrentBox(e)}
      id={props.cords}
      data-reserve-count={boxReverseCount.current}
      className="relative border border-green-500 flex items-center justify-center"
    >
      <Mark markedBy={currentCord} />
    </div>
  );
}
