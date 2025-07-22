"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const Vector_1 = require("./Vector");
class Move {
    Move(a) {
        Move.a = a;
    }
    static execute(a) {
        a.setLocation(Vector_1.Vector.Addition(a.getLocation(), a.getVelocity()));
    }
}
exports.Move = Move;
