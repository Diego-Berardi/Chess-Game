import { pieces } from "./index";
import svgQueenB from "../../img/queen_B.svg";
import svgQueenW from "../../img/queen_W.svg";

export class queen extends pieces {
  constructor(color, index) {
    super(color, index);
    if (color === "b") {
      this.name = `q`;
      this.svgString = svgQueenB;
    } else {
      this.name = "Q";
      this.svgString = svgQueenW;
    }

    this.moves = {
      upRight: [-7, -14, -21, -28, -35, -42, -49],
      downright: [9, 18, 27, 36, 45, 54, 63],
      upLeft: [-9, -18, -27, -36, -45, -54, -63],
      downLeft: [7, 14, 21, 28, 35, 42, 49],
      up: [-8, -16, -24, -32, -40, -48, -56],
      down: [8, 16, 24, 32, 40, 48, 56],
      right: [1, 2, 3, 4, 5, 6, 7],
      left: [-1, -2, -3, -4, -5, -6, -7],
    };
  }

  prova() {}

  returnPossibleMoves(board) {
    const possibleMoves = [];
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
