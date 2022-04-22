import { pieces } from "./index";

import svgKingB from "../../img/king_B.svg";
import svgKingW from "../../img/king_W.svg";

export class king extends pieces {
  constructor(color, index) {
    super(color, index);

    if (color === "b") {
      this.name = `k`;
      this.svgString = `${svgKingB}`;
      this.moveCasteling = [2, 6];
    } else {
      this.name = "K";
      this.svgString = `${svgKingW}`;
      this.moveCasteling = [58, 62];
    }

    this.moves = {
      upRight: [-7],
      downright: [9],
      upLeft: [-9],
      downLeft: [7],
      up: [-8],
      down: [8],
      right: [1],
      left: [-1],
    };
  }

  returnPossibleMoves(board) {
    const possibleMoves = [];
    if (!this.checkCheck(board)) {
      if (this.color === "b") {
        if (board.FEN_castiling.includes(2)) this.moves.left = [-1, -2];
        if (board.FEN_castiling.includes(6)) this.moves.right = [1, 2];
      } else {
        if (board.FEN_castiling.includes(58)) this.moves.left = [-1, -2];
        if (board.FEN_castiling.includes(62)) this.moves.right = [1, 2];
      }
    }

    // perpendicolar moves
    this.returnMovesFromArray(
      this.moves.up,
      "perpendicolar",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.down,
      "perpendicolar",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.left,
      "perpendicolar",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.right,
      "perpendicolar",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));

    // digonale moves
    this.returnMovesFromArray(
      this.moves.upRight,
      "diagonal",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.downright,
      "diagonal",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.upLeft,
      "diagonal",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.downLeft,
      "diagonal",
      board
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));

    return possibleMoves;
  }

  returnPossibleEatMoves(board) {
    const possibleEatMoves = [];

    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.up, "perpendicolar", board)
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.down, "perpendicolar", board)
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.right, "perpendicolar", board)
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.left, "perpendicolar", board)
        .possibleEatMove
    );

    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.upRight, "diagonal", board)
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.downright, "diagonal", board)
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.upLeft, "diagonal", board)
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.downLeft, "diagonal", board)
        .possibleEatMove
    );

    return possibleEatMoves.filter((elem) => {
      if (elem === 0) return true;
      return elem && elem !== -1;
    });
  }
}
