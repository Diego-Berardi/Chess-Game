const container_section = document.querySelector(".container");
const board_div = document.querySelector(".board");
// const restart_btn =

// create board
let boardArr = [];
let k = 0;
let piecesArr = [];

function startGame() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.id = k;

      square.classList.add("square");
      if (j % 2 === 0) {
        if (i % 2 === 0) square.classList.add("white-square");
        else square.classList.add("black-square");
      } else {
        if (!(i % 2 === 0)) square.classList.add("white-square");
        else square.classList.add("black-square");
      }
      board_div.appendChild(square);
      boardArr.push(square);

      k++;
    }
  }

  // create black pieces
  for (let i = 0; i < 16; i++) {
    const pieces = document.createElement("div");

    if (i === 0 || i === 7) createPiece(pieces, "r", "b");
    if (i === 1 || i === 6) createPiece(pieces, "n", "b");
    if (i === 2 || i === 5) createPiece(pieces, "b", "b");
    if (i === 4) createPiece(pieces, "k", "b");
    if (i === 3) createPiece(pieces, "q", "b");
    if (Math.floor(i / 8) === 1) createPiece(pieces, "p", "b");

    pieces.classList.add("pieces");
    pieces.dataset.index = i;
    pieces.dataset.color = "b";

    boardArr[i].appendChild(pieces);
    piecesArr.push(pieces);
  }

  // create white pieces
  for (let i = 48; i < 64; i++) {
    const pieces = document.createElement("div");

    if (i === 56 || i === 63) createPiece(pieces, "r", "w");
    if (i === 57 || i === 62) createPiece(pieces, "n", "w");
    if (i === 58 || i === 61) createPiece(pieces, "b", "w");
    if (i === 58 || i === 61) createPiece(pieces, "b", "w");
    if (i === 60) createPiece(pieces, "k", "w");
    if (i === 59) createPiece(pieces, "q", "w");
    if (Math.floor(i / 8) === 6) createPiece(pieces, "p", "w");

    pieces.classList.add("pieces");
    pieces.dataset.index = i;
    pieces.dataset.color = "w";

    boardArr[i].appendChild(pieces);
    piecesArr.push(pieces);
  }
}
