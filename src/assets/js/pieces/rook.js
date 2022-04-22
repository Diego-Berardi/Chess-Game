import { pieces } from "./index";
import svgRookB from "../../img/rook_B.svg";
import svgRookW from "../../img/rook_W.svg";

export class rook extends pieces {
  constructor(color, index) {
    super(color, index);

    if (color === "b") {
      this.name = `r`;
      this.svgString = svgRookB;
    } else {
      this.name = "R";
      this.svgString = svgRookW;
    }

    this.moves = {
      up: [-8, -16, -24, -32, -40, -48, -56],
      down: [8, 16, 24, 32, 40, 48, 56],
      right: [1, 2, 3, 4, 5, 6, 7],
      left: [-1, -2, -3, -4, -5, -6, -7],
    };
    
  }

  returnPossibleMoves(board) {
    const possibleMoves = [];
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

    return possibleEatMoves.filter((elem) => {
      if (elem === 0) return true;
      return elem && elem !== -1;
    });
  }
}
