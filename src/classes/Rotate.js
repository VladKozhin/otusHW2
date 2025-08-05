"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
var Rotate = /** @class */ (function () {
    function Rotate(target, angle) {
        this.target = target;
        this.angle = angle;
    }
    Rotate.prototype.Execute = function () {
        /* const vx = this.target.getLocation().x
         const vy = this.target.getLocation().y
 
         const cosTheta = Math.cos(this.target.getDirection());
         const sinTheta = Math.sin(this.target.getDirection());
 
         const newVx = Math.round(vx * cosTheta - vy * sinTheta);
         const newVy = Math.round(vx * sinTheta + vy * cosTheta);
 
         this.target.setLocation(new Vector(newVx, newVy))*/
        this.target.setDirection((this.target.getDirection() + this.angle) % 360);
    };
    return Rotate;
}());
exports.Rotate = Rotate;
