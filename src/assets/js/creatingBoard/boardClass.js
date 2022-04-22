import { board_div } from "./index";
import { returnObjPiece } from "../utilyFunction/returnObjPiece";

export class BoardClass {
  constructor(FEN_string) {
    this.FEN_string = FEN_string;

    this.FEN_arr = this.FEN_string.split(" ");
    this.FEN_position = this.FEN_arr[0];
    this.turn = this.FEN_arr[1];
    this.FEN_castiling = this.FEN_arr[2].split("").map((elem) => {
      if (elem === "k") return 2;
      if (elem === "q") return 6;
      if (elem === "K") return 58;
      if (elem === "Q") return 62;
    });
    this.FEN_elPassant = this.FEN_arr[3];
    this.FEN_halmoves = this.FEN_arr[4];
    this.FEN_numTurns = this.FEN_arr[5];

    this.boardPositionArr = [];
    this.pieceObjArr = [];
  }
  updateFEN() {
    this.FEN_arr = this.FEN_string.split(" ");
    this.FEN_position = this.FEN_arr[0];
    this.turn = this.FEN_arr[1];
    this.FEN_castiling = this.FEN_arr[2].split("").map((elem) => {
      if (elem === "k") return 2;
      if (elem === "q") return 6;
      if (elem === "K") return 58;
      if (elem === "Q") return 62;
    });
    this.FEN_elPassant = this.FEN_arr[3];
    this.FEN_halmoves = this.FEN_arr[4];
    this.FEN_numTurns = this.FEN_arr[5];
  }

  returnPieces_div() {
    return this.returnSquare_div_Arr()
      .filter((elem) => elem.firstElementChild)
      .map((elem) => elem.firstElementChild);
  }

  returnSquare_div_Arr() {
    return [...board_div.children].filter(
      (square) => square.classList[0] === "square"
    );
  }

  updatePieceObjArr() {
    this.pieceObjArr = this.boardPositionArr
      .map((elem, i) => {
        return { name: elem, index: i };
      })
      .filter((elem) => elem.name)
      .map((elem) => {
        const { name, index } = elem;
        return returnObjPiece(name, index);
      });
  }

  updateBoardPositionArr() {
    this.boardPositionArr = this.fromFEN_toBoardPositionArr(this.FEN_position);
  }

  fromFEN_toBoardPositionArr(positionStr) {
    const result = [];
    const rowsArr = positionStr.split("/");

    rowsArr.forEach((row) => {
      const rows = row.split("");
      rows.forEach((elem) => {
        if (Number(elem)) {
          for (let i = 0; i < elem; i++) result.push(false);
        } else result.push(elem);
      });
    });
    return result;
  }

  fromBoardPositionArr_toFEN(positionArr) {
    // create rowsArr
    const rows = [];
    let k = 0;
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push(positionArr[k]);
        k++;
      }
      rows.push(row);
    }

    // convert False to num
    const finalArr = [];
    rows.forEach((row) => {
      const newRow = [];
      for (let i = 0; i < 8; i++) {
        if (!row[i]) {
          let k = 0;
          while (row[i] === false) {
            i++;
            k++;
          }
          i--;
          newRow.push(k.toString());
        } else newRow.push(row[i]);
      }
      const strRow = newRow.join("");
      finalArr.push(strRow);
    });

    return finalArr.join("/");
  }

  createBoard() {
    let k = 0;
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
        k++;
      }
    }
    k = 0;
  }

  updateBoard_div() {
    const squareArr = this.returnSquare_div_Arr();
    squareArr.forEach((square) => (square.innerHTML = ""));

    this.pieceObjArr.forEach((pieceObj) => {
      const piece_div = document.createElement("div");
      piece_div.innerHTML = pieceObj.svgString;
      piece_div.dataset.name = pieceObj.name;
      piece_div.dataset.color = pieceObj.color;
      piece_div.classList.add("pieces");
      piece_div.dataset.index = pieceObj.index;

      squareArr[pieceObj.index].appendChild(piece_div);
    });
  }
}
