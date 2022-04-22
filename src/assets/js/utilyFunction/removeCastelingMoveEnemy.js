  // remove casteling move if blocked by enemy
export function removeCastelingMoveEnemy(moves, pieceObj) {
     if (pieceObj.name === "k" && pieceObj.index === 4) {
       if (!moves.find((elem) => elem === 5))
         moves = moves.filter((elem) => elem !== 6);
       if (!moves.find((elem) => elem === 3))
         moves = moves.filter((elem) => elem !== 2);
     }
     if (pieceObj.name === "K" && pieceObj.index === 60) {
       if (!moves.find((elem) => elem === 61))
         moves = moves.filter((elem) => elem !== 62);
       if (!moves.find((elem) => elem === 59))
         moves = moves.filter((elem) => elem !== 58);
     }
}