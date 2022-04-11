class pieces {
  constructor(color, index) {
    this.color = color;
    this.index = Number(index);
    this.xIndex = this.index - Math.floor(this.index / 8) * 8;
    this.yIndex = Math.floor(this.index / 8);
  }
  

  verifyLegalMove(moveIndex, pieceToMove) {
    const initialIndex = pieceToMove.dataset.index;

    const pieceEaten = piecesArr.find(
      (piece) => Number(piece.dataset.index) === moveIndex
    );
    let squarePieceEaten;
    if (pieceEaten) {
      squarePieceEaten = pieceEaten.parentElement;
      squarePieceEaten.removeChild(pieceEaten);
      piecesArr = piecesArr.filter((elem) => {
        return elem !== pieceEaten;
      });
    }

    pieceToMove.dataset.index = moveIndex;
    const check = this.checkCheck();

    if (pieceEaten) {
      squarePieceEaten.appendChild(pieceEaten);
      piecesArr.push(pieceEaten);
    }

    pieceToMove.dataset.index = initialIndex;

    return !check;
  }

  checkCheck() {
    const arr = [];
    piecesArr.forEach((elem) => {
      const piece = returnPieceObj(
        elem.dataset.name,
        elem.dataset.color,
        elem.dataset.index
      );
      piece
        .returnPossibleEatMoves()
        .forEach((move) =>
          arr.push({ possibleEatMove: move, fromColor: piece.color })
        );
    });

    const kingsPosition = piecesArr
      .filter((elem) => elem.dataset.name === "k")
      .map((elem) => Number(elem.dataset.index));

    return arr.find((elem) => {
      const { possibleEatMove, fromColor } = elem;
      return kingsPosition.includes(possibleEatMove) && fromColor !== turn;
    });
  }

  filterPerpendicolarMoves(arr) {
    return arr.filter((elem) => {
      if (elem > 63 || elem < 0) return false;

      return !(
        elem - Math.floor(elem / 8) * 8 !== this.xIndex &&
        Math.floor(elem / 8) !== this.yIndex
      );
    });
  }
  filterDiagonalpMoves(arr) {
    return arr.filter((elem) => {
      if (elem > 63 || elem < 0) return false;

      return (
        (elem - Math.floor(elem / 8) * 8 + Math.floor(elem / 8)) % 2 ===
        (this.yIndex + this.xIndex) % 2
      );
    });
  }

  returnMovesFromArray(arr, typeOfMoves) {
    let movesIndexs = arr.map((elem) => {
      return this.index + elem;
    });

    const obstacle = movesIndexs.findIndex((move) => {
      return piecesArr.find((piece) => Number(piece.dataset.index) === move);
    });

    let movesIndexFiltered;
    if (typeOfMoves === "diagonal") {
      movesIndexFiltered = this.filterDiagonalpMoves(movesIndexs);
    } else movesIndexFiltered = this.filterPerpendicolarMoves(movesIndexs);

    let possibleMoves = [];
    let possibleEatMoves = [];
    movesIndexFiltered.forEach((move) => {
      const piece = piecesArr.find(
        (piece) => Number(piece.dataset.index) === move
      );
      if (!piece) possibleMoves.push(move);
      else if (piece && this.color !== piece.dataset.color)
        possibleEatMoves.push(move);
    });

    if (obstacle !== -1) {
      if (movesIndexFiltered[obstacle] === possibleEatMoves[0])
        return {
          possibleMoves: possibleMoves.slice(0, obstacle),
          possibleEatMove: possibleEatMoves[0],
        };
      else {
        return {
          possibleMoves: possibleMoves.slice(0, obstacle),
          possibleEatMove: -1,
        };
      }
    }
    return { possibleMoves, possibleEatMove: possibleEatMoves[0] };
  }
}
