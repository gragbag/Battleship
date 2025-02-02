import { Ship } from "./Ship";
export class Gameboard {
	board: any[][];
	ships: number;

	constructor() {
		this.board = Array(10)
			.fill(0)
			.map(() => Array(10).fill(0));
		this.ships = 0;
	}

	addShip(row: number, col: number, ship: Ship, direction: number[]): boolean {
		const length = ship.length;

		if (!this.validPlacement(row, col, ship, direction)) {
			return false;
		}

		let r = row;
		let c = col;
		for (let i = 0; i < length; i++) {
			this.board[r][c] = ship;
			r += direction[0];
			c += direction[1];
		}

		this.ships++;
		return true;
	}

	validPlacement(row: number, col: number, ship: Ship, direction: number[]): boolean {
		const length = ship.length;
		const endR = row + (length - 1) * direction[0];
		const endC = col + (length - 1) * direction[1];

		if (endR > 10 || endC > 10) {
			return false;
		}

		let r = row;
		let c = col;

		for (let i = 0; i < length; i++) {
			if (this.board[r][c] instanceof Ship) {
				return false;
			}
			r += direction[0];
			c += direction[1];
		}

		return true;
	}

	receiveAttack(row: number, col: number) {
		if (!(this.board[row][col] instanceof Ship)) {
			if (this.board[row][col] == 0) {
				this.board[row][col] = -1; //-1 means the square was a miss
			}
			return;
		}

		this.board[row][col].hit(); //The item on row / col should be a ship

		if (this.board[row][col].isSunk()) {
			this.ships--;
		}

		this.board[row][col] = 1; //1 means the square has already been hit
	}

	gameOver() {
		return this.ships == 0;
	}
}
