import { Board, Sign } from "./type";

const createWinningCombinationAndWinnerChecker = function (
  numberOfCols: number
) {
  const WINNING_COMBINATIONS: number[][][] = [];
  const mainDiagonal = [];
  const secoundaryDiagonal = [];
  for (let i = 0; i < numberOfCols; i++) {
    const row = [];
    const col = [];
    for (let j = 0; j < numberOfCols; j++) {
      col.push([j, i]);
      row.push([i, j]);
      if (i == j) mainDiagonal.push([i, j]);
      if (j == numberOfCols - 1) secoundaryDiagonal.push([i, j - i]);
    }
    WINNING_COMBINATIONS.push(row);
    WINNING_COMBINATIONS.push(col);
  }
  WINNING_COMBINATIONS.push(mainDiagonal);
  WINNING_COMBINATIONS.push(secoundaryDiagonal);

  return (board: Board): null | Sign => {
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
