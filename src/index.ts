import { Player } from "./Player";
import { Ship } from "./Ship";
import { viewBoard, clearBoard } from "./GBView";
import "./styles.css";

const playerOne = new Player();
const playerTwo = new Player();

const boardOne = playerOne.gameboard;
const boardTwo = playerTwo.gameboard;

const containerOne = document.getElementById("containerOne") as HTMLDivElement;
const containerTwo = document.getElementById("containerTwo") as HTMLDivElement;

boardOne.addShip(3, 4, new Ship(3), [0, 1]);
boardOne.addShip(5, 6, new Ship(4), [1, 0]);
boardOne.addShip(7, 8, new Ship(2), [-1, 0]);

boardTwo.addShip(5, 7, new Ship(2), [1, 0]);
boardTwo.addShip(9, 1, new Ship(4), [0, 1]);
boardTwo.addShip(0, 2, new Ship(3), [1, 0]);

viewBoard(boardOne, containerOne);

viewBoard(boardTwo, containerTwo);

document.addEventListener("tileClick", (e) => {
	clearBoard(containerOne);
	viewBoard(boardOne, containerOne);

	clearBoard(containerTwo);
	viewBoard(boardTwo, containerTwo);
});
