import { Player } from "./Player";
import { viewBoard } from "./GBView";
import { generateBoard, randomAttack } from "./ComputerEnemy";
import { displaySetup } from "./SetupController";

const gameOverPopup = document.getElementById("gameOverPopup") as HTMLDivElement;
const winnerText = document.getElementById("winnerText") as HTMLHeadingElement;
const restartButton = document.getElementById("restartButton") as HTMLButtonElement;

const containerOne = document.getElementById("containerOne") as HTMLDivElement;
const containerTwo = document.getElementById("containerTwo") as HTMLDivElement;

const playerOne = new Player();
const playerTwo = new Player();

const boardOne = playerOne.gameboard;
const boardTwo = playerTwo.gameboard;

const startGame = () => {
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
	boardOne.clearBoard();
	boardTwo.clearBoard();
	displaySetup();
});

export { startGame, playerOne };
