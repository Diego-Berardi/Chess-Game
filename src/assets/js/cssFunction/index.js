import { board } from "../app";
import { CustomConfirm } from "./customConfirm";

function highlightPossibleMoves(arr) {
  arr.forEach((elem) => {
    board
      .returnSquare_div_Arr()
      [elem].classList.add("possible-moves-highlight");
  });
}

function highlightPossibleEatMoves(arr) {
  arr.forEach((elem) => {
    board
      .returnSquare_div_Arr()
      [elem].classList.add("possible-eat-moves-highlight");
  });
}
function removeHighlightMoves() {
  board
    .returnSquare_div_Arr()
    .forEach((elem) => elem.classList.remove("possible-moves-highlight"));
  board
    .returnSquare_div_Arr()
    .forEach((elem) => elem.classList.remove("possible-eat-moves-highlight"));
}

export {
  highlightPossibleMoves,
  highlightPossibleEatMoves,
  removeHighlightMoves,
  CustomConfirm,
};
