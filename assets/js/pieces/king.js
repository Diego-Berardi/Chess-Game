class king extends pieces {
  constructor(color, index) {
    super(color, index);
    this.name = `k`;
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
