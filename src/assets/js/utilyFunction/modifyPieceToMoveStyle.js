export function modifyPieceToMoveStyle(pieceToMove) {
  pieceToMove.style.cursor = "grab";
  pieceToMove.style.position = "relative";
  pieceToMove.style.top = "0";
  pieceToMove.style.left = "0";
  pieceToMove.style.zIndex = "0";
}
