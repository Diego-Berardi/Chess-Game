import { BoardClass, board_div } from "./creatingBoard";
import { dragStart, dragMove, dragEnd } from "./functionEvent";
import { gameOverMenu_div } from "./creatingBoard";



let board = new BoardClass(
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR W KQkq - 0 1."
);

board.createBoard();
board.updateBoardPositionArr();
board.updatePieceObjArr();
board.updateBoard_div();

const squares_div = board.returnSquare_div_Arr();

squares_div.forEach((elem) => {
  elem.addEventListener("mousedown", dragStart);
});

board_div.addEventListener("mousemove", dragMove);
board_div.addEventListener("mouseup", dragEnd);
board_div.addEventListener("mouseleave", dragEnd);

squares_div.forEach((elem) => {
  elem.addEventListener("touchstart", dragStart);
});
//   piecesArr.forEach((elem) => {
//     elem.addEventListener("touchstart", dragStart);
//   });
//

board_div.addEventListener("touchmove", dragMove);
board_div.addEventListener("touchend", dragEnd);

function restartGame() {
  board.FEN_string =
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR W KQkq - 0 1.";
  board.updateFEN();
  board.updateBoardPositionArr();
  board.updatePieceObjArr();
  board.updateBoard_div();

  gameOverMenu_div.style.display = "none";
}

document
  .querySelectorAll(".restart-btn")
  .forEach((elem) => elem.addEventListener("click", restartGame));

export { board };

// async function gino () {

//   Confirm.render();

//   const prova = await n;

//   console.log(prova);
// }

// gino();
