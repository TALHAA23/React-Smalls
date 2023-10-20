import { Sign } from "../assets/type";
import Mark from "./Mark";
import {
  useGridValue,
  useToggleTurn,
  useTurn,
} from "../hooks/TurnAndToggleProvider";
import { MouseEvent, useState } from "react";
import WinnerProvider, {
  useBoard,
  useBoardChangeHandler,
} from "../hooks/WinnerProvider";

export default function PlayBoard() {
  const turn = useTurn();
  const NUMBER_OF_COL = useGridValue();
  const renderBoxes = [];
  for (let i = 0; i < NUMBER_OF_COL; i++)
    for (let j = 0; j < NUMBER_OF_COL; j++)
      renderBoxes.push(<Box cords={`${i},${j}`} />);
  return (
    <WinnerProvider>
      <div className="w-[90%] aspect-square max-w-[500px]">
        <h1>
          {turn.title}:{turn.sign}
        </h1>
        <div
          className={`w-full h-full pointe p-1 border border-black grid grid-cols-${NUMBER_OF_COL} gap-1`}
        >
          {renderBoxes}
        </div>
      </div>
    </WinnerProvider>
  );
}

interface BoxProps {
  cords: string;
}

function Box(props: BoxProps) {
  const [x, y] = props.cords.split(",");
  const turn = useTurn();
  const toogleTurn = useToggleTurn();
  const board = useBoard();
  const boardChangeHandler = useBoardChangeHandler();
  let currentCord: Sign;
  currentCord = board[x][y];

  function markCurrentBox(event: MouseEvent) {
    toogleTurn();
    boardChangeHandler(event.currentTarget.id, turn.sign);
    const mark = event.currentTarget.firstElementChild;
    const a = event.currentTarget.querySelector("div data-[cords]");
    const markColor = turn.sign == "X" ? "border-blue-400" : "border-red-400";
    mark?.classList.replace("border-gray-500", markColor);
  }

  return (
    <div
      onClick={(e) => markCurrentBox(e)}
      id={props.cords}
      className="border border-green-500 flex items-center justify-center"
    >
      <Mark markedBy={currentCord} size="sm" />
    </div>
  );
}
