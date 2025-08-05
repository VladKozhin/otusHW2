"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var Move = /** @class */ (function () {
    function Move(target) {
        this.target = target;
    }
    Move.prototype.Execute = function () {
        var location = this.target.getLocation();
        var velocity = this.target.getVelocity();
        var newLocation = location.add(velocity);
        this.target.setLocation(newLocation);
    };
    return Move;
}());
exports.Move = Move;
