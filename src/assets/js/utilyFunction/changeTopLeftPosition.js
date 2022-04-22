import { getMouseTouchPosition } from "./";
import { board_div } from "../creatingBoard";

export function changeTopLeftPosition(obj, e) {
  const { x, y } = getMouseTouchPosition(e);

  obj.style.top = `${y - board_div.offsetTop - obj.clientHeight / 2}px`;
  obj.style.left = `${x - board_div.offsetLeft - obj.clientWidth / 2}px`;
}
