import { king, queen, bishop, knight, rook, pawn } from "../pieces";

export function returnObjPiece(name, index) {
  if (name === "p") return new pawn("b", index);
  if (name === "n") return new knight("b", index);
  if (name === "r") return new rook("b", index);
  if (name === "b") return new bishop("b", index);
  if (name === "q") return new queen("b", index);
  if (name === "k") return new king("b", index);

  if (name === "P") return new pawn("W", index);
  if (name === "N") return new knight("W", index);
  if (name === "R") return new rook("W", index);
  if (name === "B") return new bishop("W", index);
  if (name === "Q") return new queen("W", index);
  if (name === "K") return new king("W", index);
}
