import { Sign, Board, WinnerAttributes } from "../assets/type";
import { createContext, useContext, useEffect, useState } from "react";
import checkWinner from "../assets/checkWinner";
import resetBoxes from "../assets/resetBoxes";
import createBoard from "../assets/createBoard";
import { useToggleTurn, useTurn } from "./TurnAndToggleProvider";
import autoMove from "../assets/autoMove";
import readURL from "../assets/readURL";
import updateUIforCurrentMove from "../assets/updateUIforCurrentMove";

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
const initBoard = createBoard();

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
  const [board, setBoard] = useState<Board>(createBoard());
  const [winner, setWinner] = useState<WinnerAttributes>(initWinnerAttributes);
  const [record, setRecord] = useState(initRecord);
  useEffect(() => {
    const gotWinner = checkWinner(board);
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
  const turn = useTurn();
  const toggleturn = useToggleTurn();

  useEffect(() => {
    const { type } = readURL();
    if (turn.title == "Computer") {
      let [x, y] = autoMove();
      const reserveCountIfAdvance = parseInt(
        document.getElementById(`${x},${y}`)?.dataset.reserveCount || "0"
      );

      console.log(type, reserveCountIfAdvance);
      if (!(type == "advance" && reserveCountIfAdvance < 3))
        while (board[x][y] != null) [x, y] = autoMove();

      setTimeout(() => {
        const target = document.getElementById(`${x},${y}`);
        handleBoardChange([x, y].toString(), turn.sign);
        toggleturn();
        updateUIforCurrentMove(target);
      }, 1000);
    }
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

  function reset() {
    setWinner(initWinnerAttributes);
    setBoard(initBoard);
    resetBoxes();
  }

  return (
    <WinnerContext.Provider
      value={[board, handleBoardChange, winner, record, reset]}
    >
      {props.children}
    </WinnerContext.Provider>
  );
}
