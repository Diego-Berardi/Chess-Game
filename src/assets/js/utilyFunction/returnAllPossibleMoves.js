export function returnAllPossibleMoves(pieceObj, board) {
  const moves = pieceObj
    .returnPossibleMoves(board)
    .filter((move) => pieceObj.verifyLegalMove(move, pieceObj, board));

  const eatMoves = pieceObj
    .returnPossibleEatMoves(board)
    .filter((move) => pieceObj.verifyLegalMove(move, pieceObj, board));

  return [moves, eatMoves];
}
