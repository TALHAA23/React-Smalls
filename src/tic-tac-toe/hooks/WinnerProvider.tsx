import { Sign, Board, WinnerAttributes } from "../assets/type";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useGridValue } from "./TurnAndToggleProvider";
import createWinningCombinationAndWinnerChecker from "../assets/checkWinner";

type WinnerContextType = [
  Board | [],
  (cords: string, sign: Sign) => void, //board change handler
  WinnerAttributes,
  {}, //records
  () => void //reset
];

const initWinnerAttributes: WinnerAttributes = {
  isAnnounced: false,
  winner: null,
};
const initRecord = {
  X: 0,
  O: 0,
  draw: 0,
};

const WinnerContext = createContext<WinnerContextType>([
  [],
  () => {},
  initWinnerAttributes,
  {},
  () => {},
]);
export const useBoard = () => useContext(WinnerContext)[0];
export const useBoardChangeHandler = () => useContext(WinnerContext)[1];
export const useWinner = () => useContext(WinnerContext)[2];
export const useRecord = () => useContext(WinnerContext)[3];
export const useReset = () => useContext(WinnerContext)[4];
export default function WinnerProvider(props: { children: React.ReactNode }) {
  const grid = useGridValue();
  const [board, setBoard] = useState<Board>(initBoard(grid));
  const [winner, setWinner] = useState<WinnerAttributes>(initWinnerAttributes);
  const [record, setRecord] = useState(initRecord);
  useEffect(() => {
    const winnerChecker = createWinningCombinationAndWinnerChecker(grid);
    const gotWinner = winnerChecker(board);
    if (gotWinner) {
      setWinner({
        isAnnounced: true,
        winner: gotWinner,
      });
      setRecord((prevRecord) => ({
        ...prevRecord,
        [gotWinner]: prevRecord[gotWinner] + 1,
      }));
    }
  }, [board]);
  console.log(board);
  function handleBoardChange(cords: string, sign: Sign) {
    const [x, y] = cords.split(",");
    setBoard((prevBoard) => {
      return prevBoard.map((row, outerIndex) => {
        return row.map((col, innerIndex) => {
          if (outerIndex == parseInt(x) && innerIndex == parseInt(y))
            return sign;
          else return col;
        });
      });
    });
  }

  function reset() {
    setWinner(initWinnerAttributes);
    setBoard(initBoard(grid));
    const boxes = document.querySelectorAll("div[data-reserve-count]");
    boxes.forEach((item) => (item.dataset.reserveCount = "0"));
  }

  return (
    <WinnerContext.Provider
      value={[board, handleBoardChange, winner, record, reset]}
    >
      {props.children}
    </WinnerContext.Provider>
  );
}

function initBoard(grid: number): Board {
  const board: Board = [];
  for (let i = 1; i <= grid; i++) {
    const gridRow = [];
    for (let j = 1; j <= grid; j++) {
      gridRow.push(null);
    }
    board.push(gridRow);
  }
  return board;
}
