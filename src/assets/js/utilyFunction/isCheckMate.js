import { gameOverMenu_div } from "../creatingBoard";
export function isCheckMate(board) {
  let winner, loser;
  if (board.turn === "b") {
    winner = "White";
    loser = "b";
  } else {
    winner = "Black";
    loser = "w";
  }
  document.querySelector(".winner").textContent = winner;
  gameOverMenu_div.style.display = "flex";
}