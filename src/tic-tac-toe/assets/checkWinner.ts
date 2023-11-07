import readURL from "./readURL";
import { Board, Sign } from "./type";

const createWinningCombinationAndWinnerChecker = function () {
  const { grid } = readURL();
  const WINNING_COMBINATIONS: number[][][] = [];
  const mainDiagonal: number[][] = [];
  const secoundaryDiagonal: number[][] = [];
  for (let i = 0; i < grid; i++) {
    const row: number[][] = [];
    const col: number[][] = [];
    for (let j = 0; j < grid; j++) {
      col.push([j, i]);
      row.push([i, j]);
      if (i == j) mainDiagonal.push([i, j]);
      if (j == grid - 1) secoundaryDiagonal.push([i, j - i]);
    }
    WINNING_COMBINATIONS.push(row);
    WINNING_COMBINATIONS.push(col);
  }
  WINNING_COMBINATIONS.push(mainDiagonal);
  WINNING_COMBINATIONS.push(secoundaryDiagonal);

  return (board: Board): null | (Sign | "draw") => {
    if (!board) return null;
    if (board.every((set) => set.every((cord) => cord != null))) return "draw";
    for (let player of ["X", "O"]) {
      for (let combination of WINNING_COMBINATIONS) {
        if (combination.every(([i, j]) => board[i][j] === player)) {
          return player as Sign;
        }
      }
    }
    return null;
  };
};
export default createWinningCombinationAndWinnerChecker;
