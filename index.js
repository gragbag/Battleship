"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Ship_1 = require("./Ship");
const GBView_1 = require("./GBView");
const ComputerEnemy_1 = require("./ComputerEnemy");
require("./styles.css");
const gameOverPopup = document.getElementById("gameOverPopup");
const winnerText = document.getElementById("winnerText");
const restartButton = document.getElementById("restartButton");
const containerOne = document.getElementById("containerOne");
const containerTwo = document.getElementById("containerTwo");
let playerOne = new Player_1.Player();
let playerTwo = new Player_1.Player();
let boardOne = playerOne.gameboard;
let boardTwo = playerTwo.gameboard;
const startGame = () => {
    boardOne.clearBoard();
    boardTwo.clearBoard();
    boardOne.addShip(3, 4, new Ship_1.Ship(3), [0, 1]);
    boardOne.addShip(5, 6, new Ship_1.Ship(4), [1, 0]);
    boardOne.addShip(7, 8, new Ship_1.Ship(2), [-1, 0]);
    (0, ComputerEnemy_1.generateBoard)(boardTwo);
    (0, GBView_1.viewBoard)(boardOne, containerOne, true);
    (0, GBView_1.viewBoard)(boardTwo, containerTwo, false);
};
document.addEventListener("tileClick", (e) => {
    (0, GBView_1.viewBoard)(boardTwo, containerTwo, false);
    if (boardTwo.gameOver()) {
        showGameOverPopup("Player One");
    }
    const customE = e;
    const { row, col } = customE.detail;
    if (boardTwo.board[row][col] == 1) {
        return; //Get to go again
    }
    (0, ComputerEnemy_1.randomAttack)(boardOne); //Computer randomly attacks board one, will attack again on success
    (0, GBView_1.viewBoard)(boardOne, containerOne, true);
    if (boardOne.gameOver()) {
        showGameOverPopup("Player Two");
    }
});
const showGameOverPopup = (winner) => {
    winnerText.textContent = `${winner} Wins!`;
    gameOverPopup.classList.remove("hidden");
};
restartButton.addEventListener("click", () => {
    gameOverPopup.classList.add("hidden");
    startGame();
});
startGame();
