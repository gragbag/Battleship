"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Ship_1 = require("./Ship");
const GBView_1 = require("./GBView");
require("./styles.css");
const playerOne = new Player_1.Player();
const playerTwo = new Player_1.Player();
const boardOne = playerOne.gameboard;
const boardTwo = playerTwo.gameboard;
boardOne.addShip(3, 4, new Ship_1.Ship(3), [0, 1]);
boardOne.addShip(5, 6, new Ship_1.Ship(4), [1, 0]);
boardOne.addShip(7, 8, new Ship_1.Ship(2), [-1, 0]);
(0, GBView_1.viewBoard)(boardOne);
document.addEventListener("tileClick", (e) => {
    (0, GBView_1.clearBoard)();
    (0, GBView_1.viewBoard)(boardOne);
});
