import { BoardClass } from "../creatingBoard";
import { returnObjPiece } from "../utilyFunction";

export class pieces {
  constructor(color, index) {
    this.color = color;
    this.index = Number(index);
    this.xIndex = this.index - Math.floor(this.index / 8) * 8;
    this.yIndex = Math.floor(this.index / 8);
  }

  verifyLegalMove(moveIndex, pieceToMoveObj, board) {
    const newBoardPositionArr = [...board.boardPositionArr];
    // create a new temporary board
    newBoardPositionArr[moveIndex] = pieceToMoveObj.name;
    newBoardPositionArr[pieceToMoveObj.index] = false;
    const FEN_position = board.fromBoardPositionArr_toFEN(newBoardPositionArr);
    const newTempBoard = new BoardClass(
      `${FEN_position} ${board.turn} KQkq - 0 1.`
    );
    newTempBoard.updateBoardPositionArr();
    newTempBoard.updatePieceObjArr();

    return !this.checkCheck(newTempBoard);
  }

  checkCheck(board) {
    const arr = [];
    board.pieceObjArr.forEach((elem) => {
      elem
        .returnPossibleEatMoves(board)
        .forEach((move) =>
          arr.push({ possibleEatMove: move, fromColor: elem.color })
        );
    });

    const kingsPosition = board.pieceObjArr
      .filter((elem) => elem.name === "k" || elem.name === "K")
      .map((elem) => Number(elem.index));

    return arr.find((elem) => {
      const { possibleEatMove, fromColor } = elem;
      return (
        kingsPosition.includes(possibleEatMove) && fromColor !== board.turn
      );
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

  returnMovesFromArray(arr, typeOfMoves, board) {
    // array of index of the moves
    let movesIndex = arr.map((elem) => {
      return this.index + elem;
    });
    // find obstacle
    const obstacle = movesIndex.findIndex((move) => {
      return board.pieceObjArr.find((piece) => piece.index === move);
    });

    // filter moves for digonale or else perpendicolar
    let movesIndexFiltered;
    if (typeOfMoves === "diagonal") {
      movesIndexFiltered = this.filterDiagonalpMoves(movesIndex);
    } else movesIndexFiltered = this.filterPerpendicolarMoves(movesIndex);

    let possibleMoves = [];
    let possibleEatMoves = [];
    // for each move if there is't a piece in the index move then => possible move : else if the piece is enemy => eatmove
    movesIndexFiltered.forEach((move) => {
      const piece = board.pieceObjArr.find((piece) => piece.index === move);
      if (!piece) possibleMoves.push(move);
      else if (piece && this.color !== piece.color) possibleEatMoves.push(move);
    });

    // if there is an obstacle return the move until the obstacle
    if (obstacle !== -1) {
      // if the obstacle is the eat move then return possibleMoves and eat move
      if (movesIndexFiltered[obstacle] === possibleEatMoves[0])
        return {
          possibleMoves: possibleMoves.slice(0, obstacle),
          possibleEatMove: possibleEatMoves[0],
        };
      // else return only possibleMoves
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
