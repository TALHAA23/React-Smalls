import { Sign } from "../assets/type";
import Mark from "./Mark";
import {
  // useGridValue,
  useToggleTurn,
  useTurn,
} from "../hooks/TurnAndToggleProvider";
import { MouseEvent, useRef } from "react";
import WinnerProvider, {
  useBoard,
  useBoardChangeHandler,
  useWinner,
} from "../hooks/WinnerProvider";
// import { usePlaygroundAttributes } from "../hooks/PlayGroundAttributesProvider";
import Confetti from "./Confetti";
import readURL from "../assets/readURL";

export default function PlayBoard() {
  const winnerAttributes = useWinner();
  const use = useBoard();
  const turn = useTurn();
  const { grid } = readURL();
  const renderBoxes = [];

  for (let i = 0; i < grid; i++)
    for (let j = 0; j < grid; j++)
      renderBoxes.push(<Box key={`${i},${j}`} cords={`${i},${j}`} />);

  return (
    <section className="relative w-full h-screen flex items-center justify-center font-[playPretend]">
      <div className="w-[90%] aspect-square max-w-[500px]">
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
  const { type } = readURL();
  const [x, y] = props.cords.split(",");
  const turn = useTurn();
  const toogleTurn = useToggleTurn();
  const board = useBoard();
  const boardChangeHandler = useBoardChangeHandler();
  const currentCord: Sign = board[x][y];

  function markCurrentBox(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    let movesCount = parseInt(target.dataset.reserveCount || "0");
    toogleTurn();
    boardChangeHandler(target.id, turn.sign);

    if (type == "advance") {
      movesCount++;
      target.dataset.reserveCount = movesCount.toString();
      switch (movesCount) {
        case 2:
          target.querySelector("#md")?.classList.remove("invisible");
          break;
        case 3:
          target.querySelector("#lg")?.classList.remove("invisible");
          target.classList.add("pointer-events-none");
      }
    } else {
      target.classList.add("pointer-events-none");
    }
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
