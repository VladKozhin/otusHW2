"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
class Rotate {
    constructor(target) {
        this.target = target;
    }
    Execute() {
        const a = this.target.getDirection();
        const b = this.target.getAngularVelocity();
        let result = (a + b) % 360;
        this.target.setDirection(result);
    }
}
exports.Rotate = Rotate;
