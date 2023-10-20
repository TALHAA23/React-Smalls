// const WINNING_COMBINATIONS = [
//   [
//     [0, 0],
//     [0, 1],
//     [0, 2],
//   ], //top row
//   [
//     [1, 0],
//     [1, 1],
//     [1, 2],
//   ], // middle row
//   [
//     [2, 0],
//     [2, 1],
//     [2, 2],
//   ], // bottom row
//   [
//     [0, 0],
//     [1, 0],
//     [2, 0],
//   ], // left column
//   [
//     [0, 1],
//     [1, 1],
//     [2, 1],
//   ], // middle column
//   [
//     [0, 2],
//     [1, 2],
//     [2, 2],
//   ], // right column
//   [
//     [0, 0],
//     [1, 1],
//     [2, 2],
//   ], // main diagonal
//   [
//     [0, 2],
//     [1, 1],
//     [2, 0],
//   ],
// ];

import { Board } from "./type";

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

  return (board: Board) => {
    for (let player of ["X", "O"]) {
      for (let combination of WINNING_COMBINATIONS) {
        if (combination.every(([i, j]) => board[i][j] === player)) {
          return player;
        }
      }
    }
    return null;
  };
};

export default createWinningCombinationAndWinnerChecker;
