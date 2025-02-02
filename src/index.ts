import { Player } from "./Player";
import { Ship } from "./Ship";
import { viewBoard, clearBoard } from "./GBView";
import "./styles.css";

const playerOne = new Player();
const playerTwo = new Player();

const boardOne = playerOne.gameboard;
const boardTwo = playerTwo.gameboard;

boardOne.addShip(3, 4, new Ship(3), [0, 1]);
boardOne.addShip(5, 6, new Ship(4), [1, 0]);
boardOne.addShip(7, 8, new Ship(2), [-1, 0]);

viewBoard(boardOne);

document.addEventListener("tileClick", (e) => {
	clearBoard();
	viewBoard(boardOne);
});
