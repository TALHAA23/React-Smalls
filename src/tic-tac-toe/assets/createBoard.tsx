import { Board } from "./type";
import readURL from "./readURL";
export default function createBoard(): Board {
  const { grid } = readURL();
  const board = Array(grid).fill(Array(grid).fill(null));
  return board;
}
