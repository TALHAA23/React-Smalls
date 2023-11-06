import { ReactElement } from "react";
type Turn = "p1" | "p2" | "comp";
type Player2 = "2p" | "comp";
type Sign = null | "X" | "O";
type Board = Sign[][];
interface WinnerAttributes {
  isAnnounced: boolean;
  winner: Sign | "draw";
}
// Shop
type Catagory = "board" | "marker" | "box";
interface ProductAttributes {
  title: string;
  resource: string | ReactElement[];
  price: number;
  isPurchased: boolean;
  catagory: Catagory;
}

export type {
  Turn,
  Player2,
  Sign,
  Board,
  Catagory,
  WinnerAttributes,
  ProductAttributes,
};
