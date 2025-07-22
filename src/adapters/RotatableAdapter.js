"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotatableAdapter = void 0;
class RotatableAdapter {
    constructor(obj) {
        this.obj = obj;
    }
    getDirectionsNumber() {
        return this.obj.getField("DirectionsNumber");
    }
    setAngularVelocity(velocity) {
        this.obj.setField("AngularVelocity", velocity);
    }
    getDirection() {
        const d = this.obj.getField("Direction");
        const n = this.obj.getField("DirectionsNumber");
        const v = this.obj.getField("Velocity");
        return 0; /*new Vector(
            v * Math.cos(d/360*n),
            v * Math.sin(d/360*n)
        )*/
    }
    setDirection() {
    }
}
exports.RotatableAdapter = RotatableAdapter;
