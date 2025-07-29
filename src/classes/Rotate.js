"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
const Vector_1 = require("./Vector");
class Rotate {
    constructor(target) {
        this.target = target;
    }
    Execute() {
        const vx = this.target.getLocation().x;
        const vy = this.target.getLocation().y;
        const cosTheta = Math.cos(this.target.getDirection());
        const sinTheta = Math.sin(this.target.getDirection());
        const newVx = Math.round(vx * cosTheta - vy * sinTheta);
        const newVy = Math.round(vx * sinTheta + vy * cosTheta);
        this.target.setLocation(new Vector_1.Vector(newVx, newVy));
    }
}
exports.Rotate = Rotate;
