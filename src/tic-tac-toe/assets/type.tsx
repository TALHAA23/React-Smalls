type Turn = "p1" | "p2" | "comp";
type Player2 = "2p" | "comp";
type Sign = null | "X" | "O";
type Board = Sign[][];
interface WinnerAttributes {
  isAnnounced: boolean;
  winner: Sign;
}

export type { Turn, Player2, Sign, Board, WinnerAttributes };
