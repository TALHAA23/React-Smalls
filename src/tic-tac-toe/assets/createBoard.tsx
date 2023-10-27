import { Board } from "./type";
import readURL from "./readURL";
export default function createBoard(): Board {
  const { grid } = readURL();
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
