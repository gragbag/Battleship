import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

const directions = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

const generateBoard = (gameboard: Gameboard) => {
	const carrier = new Ship(5);
	const battleship = new Ship(4);
	const destroyer = new Ship(3);
	const submarine = new Ship(3);
	const patrolBoat = new Ship(2);

	placeShip(carrier, gameboard);
	placeShip(battleship, gameboard);
	placeShip(destroyer, gameboard);
	placeShip(submarine, gameboard);
	placeShip(patrolBoat, gameboard);
};

const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max);
};

const placeShip = (ship: Ship, gameboard: Gameboard) => {
	let row = getRandomInt(10);
	let col = getRandomInt(10);
	let dir = directions[getRandomInt(4)];

	while (!gameboard.addShip(row, col, ship, dir)) {
		row = getRandomInt(10);
		col = getRandomInt(10);
		dir = directions[getRandomInt(4)];
	}
};

const randomAttack = (gameboard: Gameboard) => {
	let row = getRandomInt(10);
	let col = getRandomInt(10);

	while (!gameboard.receiveAttack(row, col)) {
		row = getRandomInt(10);
		col = getRandomInt(10);
	}

	if (gameboard.board[row][col] == 1) {
		randomAttack(gameboard); //Go again if it was a success
	}
};

export { generateBoard, randomAttack };
