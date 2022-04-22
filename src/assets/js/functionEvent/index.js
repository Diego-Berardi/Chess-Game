import { board } from "../app";
import {
  changeTopLeftPosition,
  getTemporarySquare,
  isCheckMate,
  removeCastelingMoveFEN,
  removeCastelingMoveEnemy,
  updateBoardPositionArrAndBoard_div,
  modifyPieceToMoveStyle,
  returnAllPossibleMoves,
  updateElPassantMove,
} from "../utilyFunction";

import {
  highlightPossibleMoves,
  highlightPossibleEatMoves,
  removeHighlightMoves,
} from "../cssFunction";

import { checkCheckMate } from "../gameFunction/checkCheckMate";

import { moveAudio } from "../sound";

let pieceToMove;
let pieceObj;

let currentSquare;
let moves;
let eatMoves;

export function dragStart(e) {
  if (!this.firstElementChild) return;
  if (this.firstElementChild.dataset.color !== board.turn) return;

  pieceToMove = this.firstElementChild;
  // find pieceObj
  pieceObj = board.pieceObjArr.find(
    (elem) => elem.index === Number(pieceToMove.dataset.index)
  );
  // return all possible moves
  [moves, eatMoves] = returnAllPossibleMoves(pieceObj, board);
  // remove casteling move if blocked by enemy attack
  removeCastelingMoveEnemy(moves, pieceObj);

  highlightPossibleMoves(moves);
  highlightPossibleEatMoves(eatMoves);

  // modify pieceToMove style
  pieceToMove.cursor = "grabbing";
  pieceToMove.style.position = "absolute";
  pieceToMove.style.zIndex = "2";
  changeTopLeftPosition(pieceToMove, e);

  currentSquare = pieceToMove.parentElement;
  currentSquare.classList.add("highlights-border");
}

export function dragMove(e) {
  if (!pieceToMove) return;
  changeTopLeftPosition(pieceToMove, e);

  const tempSquare = getTemporarySquare(e);
  if (!tempSquare) return;

  if (currentSquare && currentSquare.id === tempSquare.id) return;
  currentSquare.classList.remove("highlights-border");
  currentSquare = tempSquare;
  currentSquare.classList.add("highlights-border");
}

export async function dragEnd(e) {
  if (!pieceToMove) return;

  removeHighlightMoves();
  currentSquare.classList.remove("highlights-border");
  modifyPieceToMoveStyle(pieceToMove);
  pieceToMove = false;

  // select the final square
  const finalSquare = getTemporarySquare(e);
  if (!finalSquare) return;

  // if the final square is not a possible move => return
  if (
    !moves.includes(Number(finalSquare.id)) &&
    !eatMoves.includes(Number(finalSquare.id))
  )
    return;

  // move sound
  moveAudio.play();

  // update boardPositionArr and board_div
  await updateBoardPositionArrAndBoard_div(board, pieceObj, finalSquare);

  //change turn
  if (board.turn === "W") board.turn = "b";
  else board.turn = "W";

  // remove casteling move
  removeCastelingMoveFEN(pieceObj.name, pieceObj.index, board);

  // update el passant move
  updateElPassantMove(pieceObj, board, finalSquare);

  pieceObj = false;
  if (checkCheckMate(board) === 0) isCheckMate(board);
}
