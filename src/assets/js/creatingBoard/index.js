import { BoardClass } from "./boardClass";

const container_section = document.querySelector(".container");
const board_div = document.querySelector(".board");
const gameOverMenu_div = document.querySelector(".game-over-menu");
const restart_btns = document.querySelectorAll(".restart-btn");


export {
  BoardClass,
  container_section,
  board_div,
  gameOverMenu_div,
  restart_btns,
};
