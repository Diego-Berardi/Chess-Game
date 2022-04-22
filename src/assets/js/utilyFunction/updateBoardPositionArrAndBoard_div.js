import { CustomConfirm } from "../cssFunction";

export async function updateBoardPositionArrAndBoard_div(
  board,
  pieceObj,
  finalSquare
) {
  // if pawn reach the last square
  const isPawn = pieceObj.name === "p" || pieceObj.name === "P";
  const isLastSquare =
    Math.floor(finalSquare.id / 8) === 0 ||
    Math.floor(finalSquare.id / 8) === 7;
  if (isPawn && isLastSquare) {
    const newCustomConfirm = new CustomConfirm();
    let name = await newCustomConfirm.render(board);

    if (board.turn !== "b") {
      name = name.toUpperCase();
    }

    board.boardPositionArr[finalSquare.id] = name;
    board.boardPositionArr[pieceObj.index] = false;
    board.updatePieceObjArr();
    board.updateBoard_div();
    return;
  }

  // if is casteling move
  const isKing = pieceObj.name === "k" || pieceObj.name === "K";
  const isKingInInitialPosition = pieceObj.index === 60 || pieceObj.index === 4;
  const isCastelMove =
    isKing &&
    pieceObj.moveCasteling.includes(Number(finalSquare.id)) &&
    isKingInInitialPosition;
  if (isCastelMove) {
    let indexRookToMove;
    let indexToMove;
    let rookName;
    if (pieceObj.name === "k") {
      rookName = "r";
      if (Number(finalSquare.id) === 6) {
        indexRookToMove = 7;
        indexToMove = 5;
      } else {
        indexRookToMove = 0;
        indexToMove = 3;
      }
    } else {
      rookName = "R";
      if (Number(finalSquare.id) === 62) {
        indexRookToMove = 63;
        indexToMove = 61;
      } else {
        indexRookToMove = 56;
        indexToMove = 59;
      }
    }
    board.boardPositionArr[indexRookToMove] = false;
    board.boardPositionArr[indexToMove] = rookName;
  }

  // if is elPassant move
  const isElPassantMove = isPawn && finalSquare.id == board.FEN_elPassant;
  if (isElPassantMove) {
    if (board.turn === "b") {
      board.boardPositionArr[board.FEN_elPassant - 8] = false;
    } else {
      board.boardPositionArr[board.FEN_elPassant + 8] = false;
    }
  }
  // update board
  board.boardPositionArr[finalSquare.id] = pieceObj.name;
  board.boardPositionArr[pieceObj.index] = false;
  board.updatePieceObjArr();
  board.updateBoard_div();
}
