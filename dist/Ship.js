"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }
    hit() {
        this.hits++;
    }
    isSunk() {
        if (this.hits == this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }
}
exports.Ship = Ship;
