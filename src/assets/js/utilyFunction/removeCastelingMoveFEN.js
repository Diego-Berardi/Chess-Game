// if king or rook move => remove the casteling move from FEN string
export function removeCastelingMoveFEN(namePiece, indexPiece, board) {
  if (namePiece === "k")
    board.FEN_castiling = board.FEN_castiling.filter(
      (elem) => elem !== 2 && elem !== 6
    );
  if (namePiece === "K")
    board.FEN_castiling = board.FEN_castiling.filter(
      (elem) => elem !== 58 && elem !== 62
    );

  if (namePiece === "r") {
    if (indexPiece === 0)
      board.FEN_castiling = board.FEN_castiling.filter((elem) => elem !== 2);
    if (indexPiece === 7)
      board.FEN_castiling = board.FEN_castiling.filter((elem) => elem !== 6);
  }

  if (namePiece === "R") {
    if (indexPiece === 56)
      board.FEN_castiling = board.FEN_castiling.filter((elem) => elem !== 58);

    if (indexPiece === 63)
      board.FEN_castiling = board.FEN_castiling.filter((elem) => elem !== 62);
  }
  if (board.FEN_castiling.length === 0) board.FEN_castiling.push("-");
  
}
