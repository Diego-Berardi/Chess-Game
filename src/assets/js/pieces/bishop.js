import { pieces } from "./index";
import svgBishopB from "../../img/bishop_B.svg";
import svgBishopW from "../../img/bishop_W.svg";

export class bishop extends pieces {
  constructor(color, index) {
    super(color, index);
    if (color === "b") {
      this.name = `b`;
      this.svgString = svgBishopB;
    } else {
      this.name = "B";
      this.svgString = svgBishopW;
    }

    this.moves = {
      upRight: [-7, -14, -21, -28, -35, -42, -49],
      downright: [9, 18, 27, 36, 45, 54, 63],
      upLeft: [-9, -18, -27, -36, -45, -54, -63],
      downLeft: [7, 14, 21, 28, 35, 42, 49],
    };
  }

  returnPossibleMoves(board) {
    const possibleMoves = [];
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
