"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Gameboard_1 = require("./Gameboard");
class Player {
    constructor() {
        this.gameboard = new Gameboard_1.Gameboard();
    }
}
exports.Player = Player;
