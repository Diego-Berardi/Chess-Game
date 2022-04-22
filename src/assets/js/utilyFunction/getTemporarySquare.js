import { board } from "../app";
import { getMouseTouchPosition } from "./";
import { board_div } from "../creatingBoard";

export function getTemporarySquare(e) {
  const { clientHeight, clientWidth } = board.returnSquare_div_Arr()[0];
  const { x, y } = getMouseTouchPosition(e);
  return board.returnSquare_div_Arr().find((elem) => {
    return (
      elem.offsetLeft >=
        Math.floor((x - board_div.offsetLeft) / clientWidth) * clientWidth &&
      elem.offsetTop >=
        Math.floor((y - board_div.offsetTop) / clientHeight) * clientHeight
    );
  });
}
