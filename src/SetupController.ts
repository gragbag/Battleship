import { startGame, playerOne } from "./GameController";
import { Ship } from "./Ship";

const setupScreen = document.getElementById("setupScreen") as HTMLDivElement;
const shipForm = document.getElementById("shipForm") as HTMLFormElement;

const errorMessage = document.getElementById("errorMessage") as HTMLHeadingElement;
const boardOne = playerOne.gameboard;

const startSetup = () => {
	shipForm.addEventListener("submit", (e) => {
		e.preventDefault();

		if (
			!createShip("carrier", 5) ||
			!createShip("battleship", 4) ||
			!createShip("destroyer", 3) ||
			!createShip("submarine", 3) ||
			!createShip("patrol", 2)
		) {
			errorMessage.classList.remove("hidden");
			return;
		}

		errorMessage.classList.add("hidden");
		setupScreen.classList.add("hidden");

		startGame();
	});
};

const displaySetup = () => {
	setupScreen.classList.remove("hidden");
};

const createShip = (ship: string, length: number): boolean => {
	const rowIn = document.getElementById(`${ship}-row`) as HTMLInputElement;
	const colIn = document.getElementById(`${ship}-col`) as HTMLInputElement;
	const dirIn = document.getElementById(`${ship}-direction`) as HTMLSelectElement;

	const row: number = Number(rowIn.value);
	const col: number = Number(colIn.value);
	let dir: number[] = [0, 1];

	switch (dirIn.value) {
		case "Up":
			dir = [-1, 0];
			break;
		case "Right":
			dir = [0, 1];
			break;
		case "Down":
			dir = [1, 0];
			break;
		case "Left":
			dir = [0, -1];
			break;
	}

	return boardOne.addShip(row, col, new Ship(length), dir);
};

export { startSetup, displaySetup };
