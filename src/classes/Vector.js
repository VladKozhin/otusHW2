"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
}
exports.Vector = Vector;
