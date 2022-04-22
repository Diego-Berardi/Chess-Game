import { pieces } from "./index";
import svgKnightB from "../../img/knight_B.svg";
import svgKnightW from "../../img/knight_W.svg";

export class knight extends pieces {
  constructor(color, index) {
    super(color, index);
    if (color === "b") {
      this.name = `n`;
      this.svgString = svgKnightB;
    } else {
      this.name = "N";
      this.svgString = svgKnightW;
    }

    this.moves = [-17, -10, 6, 15, 17, 10, -6, -15];
    this.eatMoves = [-17, -10, 6, 15, 17, 10, -6, -15];
  }
  returnPossibleMoves(board) {
    const xIndex = this.index - Math.floor(this.index / 8) * 8;
    if (xIndex === 0) {
      this.moves = [17, 10, -6, -15];
      this.eatMoves = [17, 10, -6, -15];
    }
    if (xIndex === 1) {
      this.moves = [-17, 15, 17, 10, -6, -15];
      this.eatMoves = [-17, 15, 17, 10, -6, -15];
    }
    if (xIndex === 6) {
      this.moves = [-17, -10, 6, 15, 17, -15];
      this.eatMoves = [-17, -10, 6, 15, 17, -15];
    }
    if (xIndex === 7) {
      this.moves = [-17, -10, 6, 15];
      this.eatMoves = [-17, -10, 6, 15];
    }

    const possibleMoves = this.moves.map((elem) => {
      return this.index + elem;
    });
    return possibleMoves.filter((elem) => {
      if (elem > 63 || elem < 0) return false;

      return !board.returnSquare_div_Arr()[elem].firstChild;
    });
  }
  returnPossibleEatMoves(board) {
    const possibleEatMoves = this.eatMoves.map((elem) => {
      return this.index + elem;
    });
    return possibleEatMoves.filter((elem) => {
      if (elem > 63 || elem < 0) return false;

      return (
        board.returnSquare_div_Arr()[elem].firstChild &&
        this.color !==
          board.returnSquare_div_Arr()[elem].firstChild.dataset.color
      );
    });
  }
}
