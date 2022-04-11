let pieceToMove;
let finalSquare;
let currentSquare;
let moves;
let eatMoves;

let turn = "w";

function returnPieceObj(name, color, index) {
  if (name === "p") return new pawn(color, index);
  if (name === "n") return new knight(color, index);
  if (name === "r") return new rook(color, index);
  if (name === "b") return new bishop(color, index);
  if (name === "q") return new queen(color, index);
  if (name === "k") return new king(color, index);
}

function highlightPossibleMoves(arr) {
  arr.forEach((elem) => {
    boardArr[elem].classList.add("possible-moves-highlight");
  });
}
function highlightPossibleEatMoves(arr) {
  arr.forEach((elem) => {
    boardArr[elem].classList.add("possible-eat-moves-highlight");
  });
}
function removeHighlightMoves() {
  boardArr.forEach((elem) => elem.classList.remove("possible-moves-highlight"));
  boardArr.forEach((elem) =>
    elem.classList.remove("possible-eat-moves-highlight")
  );
}

function changeTopLeftPosition(obj, e) {
  obj.style.top = `${e.y - board_div.offsetTop - obj.clientHeight / 2}px`;
  obj.style.left = `${e.x - board_div.offsetLeft - obj.clientWidth / 2}px`;
}

function getTemporarySquare(e) {
  const { clientHeight, clientWidth } = boardArr[0];
  return boardArr.find((elem) => {
    return (
      elem.offsetLeft >=
        Math.floor((e.x - board_div.offsetLeft) / clientWidth) * clientWidth &&
      elem.offsetTop >=
        Math.floor((e.y - board_div.offsetTop) / clientHeight) * clientHeight
    );
  });
}

function checkCheckMate() {
  const pieces = piecesArr.filter((elem) => {
    return elem.dataset.color === turn;
  });
  let totalMovesColor = [];

  pieces.forEach((elem) => {
    const piece = returnPieceObj(
      elem.dataset.name,
      elem.dataset.color,
      elem.dataset.index
    );
    const movesColor = piece.returnPossibleMoves().filter((move) => {
      return piece.verifyLegalMove(move, elem);
    });
    totalMovesColor = totalMovesColor.concat(movesColor);
    const eatMovesColor = piece.returnPossibleEatMoves().filter((move) => {
      return piece.verifyLegalMove(move, elem);
    });
    totalMovesColor = totalMovesColor.concat(eatMovesColor);
  });
  return totalMovesColor.length;
}

function isCheckMate() {
  let winner, loser;
  if (turn === "b") {
    winner = "w";
    loser = "b";
  } else {
    winner = "b";
    loser = "w";
  }

  console.log("winner:", winner);
}

function dragStart(e) {
  if (this.dataset.color !== turn) return;
  pieceToMove = this;
  pieceToMove.style.cursor = "grabbing";

  const pieceObj = returnPieceObj(
    pieceToMove.dataset.name,
    pieceToMove.dataset.color,
    pieceToMove.dataset.index
  );

  moves = pieceObj.returnPossibleMoves().filter((move) => {
    return pieceObj.verifyLegalMove(move, pieceToMove);
  });

  eatMoves = pieceObj.returnPossibleEatMoves().filter((move) => {
    return pieceObj.verifyLegalMove(move, pieceToMove);
  });

  highlightPossibleMoves(moves);
  highlightPossibleEatMoves(eatMoves);

  // modify pieceToMove style
  pieceToMove.style.position = "absolute";
  pieceToMove.style.zIndex = "2";
  changeTopLeftPosition(pieceToMove, e);

  currentSquare = pieceToMove.parentElement;
  currentSquare.classList.add("highlights-border");
}

function dragMove(e) {
  if (!pieceToMove) return;
  changeTopLeftPosition(pieceToMove, e);

  const tempSquare = getTemporarySquare(e);
  if (!tempSquare) return;

  if (currentSquare && currentSquare.id === tempSquare.id) return;
  currentSquare.classList.remove("highlights-border");
  currentSquare = tempSquare;
  currentSquare.classList.add("highlights-border");
}

function dragEnd(e) {
  if (!pieceToMove) return;
  pieceToMove.style.cursor = "grab";

  // if (finalSquare.id !== pieceToMove.parentElement.id)
  removeHighlightMoves();
  currentSquare.classList.remove("highlights-border");

  pieceToMove.style.position = "relative";
  pieceToMove.style.top = "0";
  pieceToMove.style.left = "0";
  pieceToMove.style.zIndex = "0";

  // select the final square
  const tempSquare = getTemporarySquare(e);
  if (!tempSquare) return (pieceToMove = false);
  finalSquare = tempSquare;

  // if the final square is not a possible move => return
  if (
    !moves.includes(Number(finalSquare.id)) &&
    !eatMoves.includes(Number(finalSquare.id))
  )
    return (pieceToMove = false);

  //remove eaten piece
  if (finalSquare.firstChild) {
    finalSquare.removeChild(finalSquare.firstChild);
    piecesArr = piecesArr.filter((elem) => {
      return elem.dataset.index !== finalSquare.id;
    });
  }

  finalSquare.appendChild(pieceToMove);
  pieceToMove.dataset.index = finalSquare.id;

  //change turn
  if (turn === "w") {
    //if pawn reach the last square
    if (
      pieceToMove.dataset.name === "p" &&
      Math.floor(finalSquare.id / 8) === 0
    ) {
      const name = prompt("what piece you want");
      createPiece(pieceToMove, name, pieceToMove.dataset.color);
    }
    turn = "b";
  } else {
    //if pawn reach the last square
    if (
      pieceToMove.dataset.name === "p" &&
      Math.floor(finalSquare.id / 8) === 7
    ) {
      const name = prompt("what piece you want");
      createPiece(pieceToMove, name, pieceToMove.dataset.color);
    }
    turn = "w";
  }
  pieceToMove = false;
  if (checkCheckMate() === 0) isCheckMate();
}

board_div.addEventListener("mousemove", dragMove);
board_div.addEventListener("mouseup", dragEnd);
board_div.addEventListener("mouseleave", dragEnd);

function restartGame() {
  k = 0;
  boardArr = [];
  piecesArr = [];
  board_div.innerHTML = "";

  startGame();
  piecesArr.forEach((elem) => {
    elem.addEventListener("mousedown", dragStart);
  });

  piecesArr.forEach((elem) => {
    elem.addEventListener("mousedown", dragStart);
  });
  turn = "w";
}
restartGame();

document.querySelector(".restart-btn").addEventListener("click", restartGame);
