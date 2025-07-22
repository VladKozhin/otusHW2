"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector.Addition = function (first, second) {
        return new Vector(first.x + second.x, first.y + second.y);
    };
    return Vector;
}());
exports.Vector = Vector;
