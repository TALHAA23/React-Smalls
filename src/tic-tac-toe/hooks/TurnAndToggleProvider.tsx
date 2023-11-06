import { createContext, useState, useContext, useEffect } from "react";
import { Sign } from "../assets/type";
import readURL from "../assets/readURL";
import { useSearchParams } from "react-router-dom";
interface Children {
  children: React.ReactNode;
}
interface PlayerAttributes {
  title: "Player 01" | "Player 02" | "Computer";
  sign: Sign;
}
const PLAYER_1_SIGN: Sign = "X";
const PLAYER_2_SIGN: Sign = "O";

export const PLAYER1: PlayerAttributes = {
  title: "Player 01",
  sign: PLAYER_1_SIGN,
};
export const PLAYER2: PlayerAttributes = {
  title: readURL().mode == "2p" ? "Player 02" : "Computer",
  sign: PLAYER_2_SIGN,
};
type TurnAndToogle = [turn: PlayerAttributes, toggle: () => void];

const TurnAndToggleContext = createContext<TurnAndToogle>([
  { title: "Player 01", sign: PLAYER_1_SIGN },
  () => {},
]);
export const useTurn = () => useContext(TurnAndToggleContext)[0];
export const useToggleTurn = () => useContext(TurnAndToggleContext)[1];
export default function TurnAndToggleProvier(props: Children) {
  const [searchParam, setSearchParam] = useSearchParams();
  const [turn, setTurn] = useState(PLAYER1);

  useEffect(() => {
    PLAYER2.title = readURL().mode == "2p" ? "Player 02" : "Computer";
  }, [searchParam]);

  const toggleTurn = () =>
    setTurn((prevTurn) => ({
      title: prevTurn.title == PLAYER1.title ? PLAYER2.title : PLAYER1.title,
      sign: prevTurn.sign == PLAYER_1_SIGN ? PLAYER_2_SIGN : PLAYER_1_SIGN,
    }));

  return (
    <TurnAndToggleContext.Provider value={[turn, toggleTurn]}>
      {props.children}
    </TurnAndToggleContext.Provider>
  );
}
