"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceShip = void 0;
const Move_1 = require("./Move");
class SpaceShip extends Move_1.Move {
    constructor(params) {
        super();
        this.params = params;
    }
    getField(fieldName) {
        if (!this.params.has(fieldName)) {
            throw `Поле ${fieldName} отсутствует у объекта!`;
        }
        return this.params.get(fieldName);
    }
    setField(key, value) {
        this.params.set(key, value);
    }
}
exports.SpaceShip = SpaceShip;
