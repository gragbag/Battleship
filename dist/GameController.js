"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerOne = exports.startGame = void 0;
const Player_1 = require("./Player");
const GBView_1 = require("./GBView");
const ComputerEnemy_1 = require("./ComputerEnemy");
const SetupController_1 = require("./SetupController");
const gameOverPopup = document.getElementById("gameOverPopup");
const winnerText = document.getElementById("winnerText");
const restartButton = document.getElementById("restartButton");
const containerOne = document.getElementById("containerOne");
const containerTwo = document.getElementById("containerTwo");
const playerOne = new Player_1.Player();
exports.playerOne = playerOne;
const playerTwo = new Player_1.Player();
const boardOne = playerOne.gameboard;
const boardTwo = playerTwo.gameboard;
const startGame = () => {
    (0, ComputerEnemy_1.generateBoard)(boardTwo);
    (0, GBView_1.viewBoard)(boardOne, containerOne, true);
    (0, GBView_1.viewBoard)(boardTwo, containerTwo, false);
};
exports.startGame = startGame;
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
    boardOne.clearBoard();
    boardTwo.clearBoard();
    (0, SetupController_1.displaySetup)();
});
