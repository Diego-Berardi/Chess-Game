class pawn extends pieces {
  constructor(color, index) {
    super(color, index);
    this.name = `p`;
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
  returnPossibleMoves() {
    const possibleMoves = this.moves.map((elem) => this.index + elem);
    const obstacle = possibleMoves.findIndex((elem) => {
      return boardArr[elem].firstChild;
    });

    if (obstacle !== -1) return possibleMoves.slice(0, obstacle);
    return possibleMoves;
  }
  returnPossibleEatMoves() {
    const possibleEatMoves = this.eatMoves.map((elem) => this.index + elem);
    return possibleEatMoves.filter((elem) => {
      const pieceAttacked = piecesArr.find(
        (piece) => Number(piece.dataset.index) === elem
      );
      return pieceAttacked && this.color !== pieceAttacked.dataset.color;
    });
  }
}
