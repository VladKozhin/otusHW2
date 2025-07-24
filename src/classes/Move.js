"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
class Move {
    constructor(target) {
        this.target = target;
    }
    Execute() {
        const location = this.target.getLocation();
        const velocity = this.target.getVelocity();
        const newLocation = location.add(velocity);
        this.target.setLocation(newLocation);
    }
}
exports.Move = Move;
