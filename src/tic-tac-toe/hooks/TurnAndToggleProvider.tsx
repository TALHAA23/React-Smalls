import { createContext, useState, useContext } from "react";
import { usePlaygroundAttributes } from "./PlayGroundAttributes";
import { Sign } from "../assets/type";
interface Children {
  children: React.ReactNode;
}
interface PlayerAttributes {
  title: "Player 01" | "Player 02" | "Computer";
  sign: Sign;
}
const PLAYER_1_SIGN: Sign = "X";
const PLAYER_2_SIGN: Sign = "O";

type TurnAndToogle = [turn: PlayerAttributes, grid: number, toggle: () => void];

const TurnAndToggleContext = createContext<TurnAndToogle>([
  { title: "Player 01", sign: PLAYER_1_SIGN },
  0,
  () => {},
]);
export const useTurn = () => useContext(TurnAndToggleContext)[0];
export const useGridValue = () => useContext(TurnAndToggleContext)[1];
export const useToggleTurn = () => useContext(TurnAndToggleContext)[2];

export default function TurnAndToggleProvier(props: Children) {
  const attributes = usePlaygroundAttributes();
  const grid = parseInt(attributes.grid);
  const PLAYER1: PlayerAttributes = {
    title: "Player 01",
    sign: PLAYER_1_SIGN,
  };
  const PLAYER2: PlayerAttributes = {
    title: attributes.mode == "2p" ? "Player 02" : "Computer",
    sign: PLAYER_2_SIGN,
  };
  const [turn, setTurn] = useState(PLAYER1);
  const toggleTurn = () =>
    // setTurn((prevTurn) => (prevTurn.title == PLAYER1 ? PLAYER2 : PLAYER1));
    setTurn((prevTurn) => ({
      title: prevTurn.title == PLAYER1.title ? PLAYER2.title : PLAYER1.title,
      sign: prevTurn.sign == PLAYER_1_SIGN ? PLAYER_2_SIGN : PLAYER_1_SIGN,
    }));
  return (
    <TurnAndToggleContext.Provider value={[turn, grid, toggleTurn]}>
      {props.children}
    </TurnAndToggleContext.Provider>
  );
}
