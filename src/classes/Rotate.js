"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
var Vector_1 = require("./Vector");
var Rotate = /** @class */ (function () {
    function Rotate(target) {
        this.target = target;
    }
    Rotate.prototype.Execute = function () {
        /* const v = this.target.getAngularVelocity() //Math.round(Math.sqrt(loc.x * loc.x + loc.y * loc.y));
         const angle = this.target.getDirection();
         const x = this.target.getLocation().x
         const y = this.target.getLocation().y
         console.log(`Current getAngularVelocity: ${v}, getDirection: ${angle}`)
         console.log(`Current x: ${x}, current y: ${y}`)
 
         const newX = Math.round(x + v * Math.cos(angle));
         const newY = Math.round(y + v * Math.sin(angle));
         console.log("New coordinates: " + newX + " " + newY)
         this.target.setLocation(new Vector(newX, newY));*/
        var vx = this.target.getLocation().x;
        var vy = this.target.getLocation().y;
        var cosTheta = Math.cos(this.target.getDirection());
        var sinTheta = Math.sin(this.target.getDirection());
        var newVx = Math.round(vx * cosTheta - vy * sinTheta);
        var newVy = Math.round(vx * sinTheta + vy * cosTheta);
        this.target.setLocation(new Vector_1.Vector(newVx, newVy));
    };
    return Rotate;
}());
exports.Rotate = Rotate;
