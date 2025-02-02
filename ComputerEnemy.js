"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBoard = void 0;
const Ship_1 = require("./Ship");
const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
const generateBoard = (gameboard) => {
    const carrier = new Ship_1.Ship(5);
    const battleship = new Ship_1.Ship(4);
    const destroyer = new Ship_1.Ship(3);
    const submarine = new Ship_1.Ship(3);
    const patrolBoat = new Ship_1.Ship(2);
    placeShip(carrier, gameboard);
    placeShip(battleship, gameboard);
    placeShip(destroyer, gameboard);
    placeShip(submarine, gameboard);
    placeShip(patrolBoat, gameboard);
};
exports.generateBoard = generateBoard;
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};
const placeShip = (ship, gameboard) => {
    let row = getRandomInt(10);
    let col = getRandomInt(10);
    let dir = directions[getRandomInt(4)];
    while (!gameboard.addShip(row, col, ship, dir)) {
        row = getRandomInt(10);
        col = getRandomInt(10);
        dir = directions[getRandomInt(4)];
    }
};
