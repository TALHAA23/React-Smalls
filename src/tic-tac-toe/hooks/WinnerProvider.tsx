import { Sign, Board, WinnerAttributes } from "../assets/type";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useGridValue } from "./TurnAndToggleProvider";
import createWinningCombinationAndWinnerChecker from "../assets/checkWinner";
const WinnerContext = createContext();
export const useBoard = () => useContext(WinnerContext)[0];
export const useBoardChangeHandler = () => useContext(WinnerContext)[1];
export default function WinnerProvider(props: { children: React.ReactNode }) {
  const grid = useGridValue();
  const [board, setBoard] = useState<Board>(initBoard(grid));
  const [winner, setWinner] = useState<WinnerAttributes>({
    isAnnounced: false,
    winner: null,
  });
  useEffect(() => {
    const winnerChecker = createWinningCombinationAndWinnerChecker(grid);
    const win = winnerChecker(board);
    console.log(win);
  }, [board]);
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

  return (
    <WinnerContext.Provider value={[board, handleBoardChange]}>
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
