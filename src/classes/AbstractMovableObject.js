"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMovableObject = void 0;
const MoveComponent_1 = require("../components/MoveComponent");
const RotateComponent_1 = require("../components/RotateComponent");
class AbstractMovableObject {
    constructor(abstractObject) {
        const location = abstractObject.getField('Location');
        const velocity = abstractObject.getField('Velocity');
        const rotation = abstractObject.getField('Direction');
        this.movementComponent = new MoveComponent_1.MoveComponent(location, velocity);
        this.rotationComponent = new RotateComponent_1.RotateComponent(rotation);
        this.abstractObject = abstractObject;
    }
    // IMovable
    getLocation() {
        return this.abstractObject.getField("Location");
    }
    setLocation(vector) {
        this.abstractObject.setField("Location", vector);
        this.movementComponent.setLocation(vector);
    }
    getVelocity() {
        return this.movementComponent.getVelocity();
    }
    // IRotatable
    getDirection() {
        return this.abstractObject.getField("Direction");
    }
    setDirection(angle) {
        this.rotationComponent.setDirection(angle);
        this.abstractObject.setField("Direction", angle);
    }
}
exports.AbstractMovableObject = AbstractMovableObject;
