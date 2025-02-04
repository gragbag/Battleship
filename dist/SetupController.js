"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displaySetup = exports.startSetup = void 0;
const GameController_1 = require("./GameController");
const Ship_1 = require("./Ship");
const setupScreen = document.getElementById("setupScreen");
const shipForm = document.getElementById("shipForm");
const errorMessage = document.getElementById("errorMessage");
const boardOne = GameController_1.playerOne.gameboard;
const startSetup = () => {
    shipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!createShip("carrier", 5) ||
            !createShip("battleship", 4) ||
            !createShip("destroyer", 3) ||
            !createShip("submarine", 3) ||
            !createShip("patrol", 2)) {
            errorMessage.classList.remove("hidden");
            return;
        }
        errorMessage.classList.add("hidden");
        setupScreen.classList.add("hidden");
        (0, GameController_1.startGame)();
    });
};
exports.startSetup = startSetup;
const displaySetup = () => {
    setupScreen.classList.remove("hidden");
};
exports.displaySetup = displaySetup;
const createShip = (ship, length) => {
    const rowIn = document.getElementById(`${ship}-row`);
    const colIn = document.getElementById(`${ship}-col`);
    const dirIn = document.getElementById(`${ship}-direction`);
    const row = Number(rowIn.value);
    const col = Number(colIn.value);
    let dir = [0, 1];
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
    return boardOne.addShip(row, col, new Ship_1.Ship(length), dir);
};
