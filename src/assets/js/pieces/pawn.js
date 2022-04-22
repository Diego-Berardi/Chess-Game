import { pieces } from ".";
import svgPawnB from "../../img/pawn_B.svg";
import svgPawnW from "../../img/pawn_W.svg";

export class pawn extends pieces {
  constructor(color, index) {
    super(color, index);
    if (color === "b") {
      this.name = `p`;
      this.svgString = svgPawnB;
    } else {
      this.name = "P";
      this.svgString = svgPawnW;
    }

    this.firstMove = true;

    if (color == "b") {
      if (this.yIndex === 1) this.moves = [8, 16];
      else this.moves = [8];

      if (this.xIndex === 7) this.eatMoves = [7];
      else if (this.xIndex === 0) this.eatMoves = [9];
      else this.eatMoves = [7, 9];
    } else {
      if (this.yIndex === 6) this.moves = [-8, -16];
      else this.moves = [-8];

      if (this.xIndex === 7) this.eatMoves = [-9];
      else if (this.xIndex === 0) this.eatMoves = [-7];
      else this.eatMoves = [-7, -9];
    }
  }
  returnPossibleMoves(board) {
    const possibleMoves = this.moves.map((elem) => this.index + elem);
    const obstacle = possibleMoves.findIndex((move) => {
      return board.returnSquare_div_Arr()[move].firstElementChild;
    });

    if (obstacle !== -1) return possibleMoves.slice(0, obstacle);
    return possibleMoves;
  }
  returnPossibleEatMoves(board) {
    const possibleEatMoves = this.eatMoves
      .map((move) => this.index + move)
      .filter((move) => {
        const pieceAttacked = board.pieceObjArr.find(
          (piece) => piece.index === move
        );
        return pieceAttacked && this.color !== pieceAttacked.color;
      });

    // add el passant move
    const moves = this.eatMoves.map((move) => this.index + move);
    if (moves.includes(board.FEN_elPassant))
      possibleEatMoves.push(board.FEN_elPassant);
    
    return possibleEatMoves;
  }
}
