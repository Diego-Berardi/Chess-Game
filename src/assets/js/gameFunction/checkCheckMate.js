export function checkCheckMate(board) {
  const pieces = board.pieceObjArr.filter((elem) => {
    return elem.color === board.turn;
  });
  let totalMovesColor = [];

  pieces.forEach((elem) => {
    const movesColor = elem.returnPossibleMoves(board).filter((move) => {
      return elem.verifyLegalMove(move, elem, board);
    });
    totalMovesColor = totalMovesColor.concat(movesColor);
    const eatMovesColor = elem.returnPossibleEatMoves(board).filter((move) => {
      return elem.verifyLegalMove(move, elem, board);
    });
    totalMovesColor = totalMovesColor.concat(eatMovesColor);
  });
  return totalMovesColor.length;
}
