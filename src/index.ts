import { Player } from "./Player";
import { Ship } from "./Ship";
import { viewBoard, clearBoard } from "./GBView";
import { generateBoard, randomAttack } from "./ComputerEnemy";
import "./styles.css";

const gameOverPopup = document.getElementById("gameOverPopup") as HTMLDivElement;
const winnerText = document.getElementById("winnerText") as HTMLHeadingElement;
const restartButton = document.getElementById("restartButton") as HTMLButtonElement;

const containerOne = document.getElementById("containerOne") as HTMLDivElement;
const containerTwo = document.getElementById("containerTwo") as HTMLDivElement;

let playerOne = new Player();
let playerTwo = new Player();

let boardOne = playerOne.gameboard;
let boardTwo = playerTwo.gameboard;

const startGame = () => {
	boardOne.clearBoard();
	boardTwo.clearBoard();

	boardOne.addShip(3, 4, new Ship(3), [0, 1]);
	boardOne.addShip(5, 6, new Ship(4), [1, 0]);
	boardOne.addShip(7, 8, new Ship(2), [-1, 0]);

	generateBoard(boardTwo);

	viewBoard(boardOne, containerOne, true);
	viewBoard(boardTwo, containerTwo, false);
};

document.addEventListener("tileClick", (e) => {
	viewBoard(boardTwo, containerTwo, false);

	if (boardTwo.gameOver()) {
		showGameOverPopup("Player One");
	}

	const customE = e as CustomEvent<{ row: number; col: number }>;
	const { row, col } = customE.detail;
	if (boardTwo.board[row][col] == 1) {
		return; //Get to go again
	}

	randomAttack(boardOne); //Computer randomly attacks board one, will attack again on success

	viewBoard(boardOne, containerOne, true);

	if (boardOne.gameOver()) {
		showGameOverPopup("Player Two");
	}
});

const showGameOverPopup = (winner: string) => {
	winnerText.textContent = `${winner} Wins!`;
	gameOverPopup.classList.remove("hidden");
};

restartButton.addEventListener("click", () => {
	gameOverPopup.classList.add("hidden");
	startGame();
});

startGame();
