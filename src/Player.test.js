import {Ship} from './Ship';
import {Player} from './Player';

test('Creating and hitting a ship until it sinks', () => {
	const newShip = new Ship(4);

	newShip.hit();
	expect(newShip.hits).toBe(1);

	newShip.hit();
	expect(newShip.hits).toBe(2);

	newShip.hit();
	expect(newShip.hits).toBe(3);

	newShip.hit();
	expect(newShip.hits).toBe(4);
	expect(newShip.isSunk()).toBe(true);
})

test('Creating a player and their gameboard', () => {
	const player = new Player();
	const gameboard = player.gameboard;

	const newShip = new Ship(4);

	expect(gameboard.addShip(5, 5, newShip, [1,0])).toBe(true);
	expect(gameboard.addShip(8, 2, new Ship(4), [1,0])).toBe(false);
	expect(gameboard.addShip(7, 8, new Ship(3), [0,1])).toBe(true);

	expect(gameboard.board[6][5]).toBe(newShip);

	gameboard.receiveAttack(5,5);
	expect(gameboard.board[5][5]).toBe(1);
	gameboard.receiveAttack(6,5);
	expect(gameboard.board[6][5]).toBe(1);
	gameboard.receiveAttack(7,5);
	expect(gameboard.board[7][5]).toBe(1);
	gameboard.receiveAttack(8,5);
	expect(gameboard.board[8][5]).toBe(1);
	
	expect(newShip.sunk).toBe(true);

	expect(gameboard.ships).toBe(1);

})