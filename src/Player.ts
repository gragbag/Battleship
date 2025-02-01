import { Gameboard } from "./Gameboard";

export class Player {
	gameboard: Gameboard;

	constructor() {
		this.gameboard = new Gameboard();
	}
}
