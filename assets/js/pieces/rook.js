class rook extends pieces {
  constructor(color, index) {
    super(color, index);
    this.name = `b`;

    this.moves = {
      up: [-8, -16, -24, -32, -40, -48, -56],
      down: [8, 16, 24, 32, 40, 48, 56],
      right: [1, 2, 3, 4, 5, 6, 7],
      left: [-1, -2, -3, -4, -5, -6, -7],
    };
  }

  

  returnPossibleMoves() {
    const possibleMoves = [];
    this.returnMovesFromArray(
      this.moves.up,
      "perpendicolar"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.down,
      "perpendicolar"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.left,
      "perpendicolar"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));
    this.returnMovesFromArray(
      this.moves.right,
      "perpendicolar"
    ).possibleMoves.forEach((elem) => possibleMoves.push(elem));

    return possibleMoves;
  }

  returnPossibleEatMoves() {
    const possibleEatMoves = [];

    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.up, "perpendicolar").possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.down, "perpendicolar")
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.right, "perpendicolar")
        .possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.left, "perpendicolar")
        .possibleEatMove
    );

    return possibleEatMoves.filter((elem) => {
      if (elem === 0) return true;
      return elem && elem !== -1;
    });
  }
}
