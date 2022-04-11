class queen extends pieces {
  constructor(color, index) {
    super(color, index);
    this.name = `q`;
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

  returnPossibleMoves() {
    const possibleMoves = [];
    // perpendicolar moves
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

    // digonale moves
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

    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.upRight, "diagonal").possibleEatMove
    );
    possibleEatMoves.push(
      this.returnMovesFromArray(this.moves.downright, "diagonal")
        .possibleEatMove
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
