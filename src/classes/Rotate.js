"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
var Rotate = /** @class */ (function () {
    function Rotate(target) {
        this.target = target;
    }
    Rotate.prototype.Execute = function () {
        var currentAngle = this.target.getDirection();
        var angularVelocity = this.target.getAngularVelocity();
        var newAngle = currentAngle + angularVelocity;
        this.target.setDirection(newAngle);
    };
    return Rotate;
}());
exports.Rotate = Rotate;
