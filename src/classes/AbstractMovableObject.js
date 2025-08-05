"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMovableObject = void 0;
const Vector_1 = require("./Vector");
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
    getFuelLevel() {
        return this.abstractObject.getField("FuelLevel");
    }
    burnFuel() {
        this.abstractObject.setField("FuelLevel", this.abstractObject.getField("FuelLevel") - 1);
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
    clarificateDirection() {
        const initialVelocity = this.movementComponent.getVelocity();
        const direction = this.rotationComponent.getDirection();
        const angleRad = (direction * Math.PI) / 180;
        return new Vector_1.Vector(Math.round(initialVelocity.x * Math.cos(angleRad) - initialVelocity.y * Math.sin(angleRad)), Math.round(initialVelocity.x * Math.sin(angleRad) + initialVelocity.y * Math.cos(angleRad)));
    }
    setVelocity(velocity) {
        this.movementComponent.setVelocity(velocity);
        this.abstractObject.setField("Velocity", velocity);
    }
}
exports.AbstractMovableObject = AbstractMovableObject;
