class bishop extends pieces {
  constructor(color, index) {
    super(color, index);
    this.name = `b`;

    this.moves = {
      upRight: [-7, -14, -21, -28, -35, -42, -49],
      downright: [9, 18, 27, 36, 45, 54, 63],
      upLeft: [-9, -18, -27, -36, -45, -54, -63],
      downLeft: [7, 14, 21, 28, 35, 42, 49],
    };
  }

  returnPossibleMoves() {
    const possibleMoves = [];
    this.returnMovesFromArray(
      this.moves.upRight,
      "diagonal"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.downright,
      "diagonal"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.upLeft,
      "diagonal"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.downLeft,
      "diagonal"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));

    return possibleMoves;
  }

  returnPossibleEatMoves() {
    const possibleEatMoves = [];

    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.upRight, "diagonal").possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.downright, "diagonal").possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.upLeft, "diagonal").possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.downLeft, "diagonal").possibleEatMove
    );

    return possibleEatMoves.filter((elem) => {
      if (elem === 0) return true;
      return elem && elem !== -1;
    });
  }
}
