export function updateElPassantMove(pieceObj, board, finalSquare) {
  const isPawn = pieceObj.name === "p" || pieceObj.name === "P";
  const isJumpMove =
    pieceObj.index - finalSquare.id === 16 ||
    pieceObj.index - finalSquare.id === -16;
  const isElPassantMove = isPawn && isJumpMove;
  if (isElPassantMove) {
    if (board.turn === "b") board.FEN_elPassant = pieceObj.index - 8;
    else board.FEN_elPassant = pieceObj.index + 8;
  } else board.FEN_elPassant = "-";
}
