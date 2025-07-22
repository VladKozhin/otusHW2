"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovableAdapter = void 0;
var Vector_1 = require("../classes/Vector");
var MovableAdapter = /** @class */ (function () {
    function MovableAdapter(obj) {
        this.obj = obj;
    }
    MovableAdapter.prototype.getLocation = function () {
        return this.obj.getField("Location");
    };
    MovableAdapter.prototype.setLocation = function (vector) {
        this.obj.setField("Location", vector);
    };
    MovableAdapter.prototype.getVelocity = function () {
        var d = this.obj.getField("Direction");
        var n = this.obj.getField("DirectionsNumber");
        var v = this.obj.getField("Velocity");
        return new Vector_1.Vector(v * Math.cos(d / 360 * n), v * Math.sin(d / 360 * n));
    };
    return MovableAdapter;
}());
exports.MovableAdapter = MovableAdapter;
