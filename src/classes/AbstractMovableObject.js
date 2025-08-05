"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMovableObject = void 0;
var Vector_1 = require("./Vector");
var MoveComponent_1 = require("../components/MoveComponent");
var RotateComponent_1 = require("../components/RotateComponent");
var AbstractMovableObject = /** @class */ (function () {
    function AbstractMovableObject(abstractObject) {
        var location = abstractObject.getField('Location');
        var velocity = abstractObject.getField('Velocity');
        var rotation = abstractObject.getField('Direction');
        this.movementComponent = new MoveComponent_1.MoveComponent(location, velocity);
        this.rotationComponent = new RotateComponent_1.RotateComponent(rotation);
        this.abstractObject = abstractObject;
    }
    AbstractMovableObject.prototype.getFuelLevel = function () {
        return this.abstractObject.getField("FuelLevel");
    };
    AbstractMovableObject.prototype.burnFuel = function () {
        this.abstractObject.setField("FuelLevel", this.abstractObject.getField("FuelLevel") - 1);
    };
    // IMovable
    AbstractMovableObject.prototype.getLocation = function () {
        return this.abstractObject.getField("Location");
    };
    AbstractMovableObject.prototype.setLocation = function (vector) {
        this.abstractObject.setField("Location", vector);
        this.movementComponent.setLocation(vector);
    };
    AbstractMovableObject.prototype.getVelocity = function () {
        return this.movementComponent.getVelocity();
    };
    // IRotatable
    AbstractMovableObject.prototype.getDirection = function () {
        return this.abstractObject.getField("Direction");
    };
    AbstractMovableObject.prototype.setDirection = function (angle) {
        this.rotationComponent.setDirection(angle);
        this.abstractObject.setField("Direction", angle);
    };
    AbstractMovableObject.prototype.clarificateDirection = function () {
        var initialVelocity = this.movementComponent.getVelocity();
        var direction = this.rotationComponent.getDirection();
        var angleRad = (direction * Math.PI) / 180;
        return new Vector_1.Vector(Math.round(initialVelocity.x * Math.cos(angleRad) - initialVelocity.y * Math.sin(angleRad)), Math.round(initialVelocity.x * Math.sin(angleRad) + initialVelocity.y * Math.cos(angleRad)));
    };
    AbstractMovableObject.prototype.setVelocity = function (velocity) {
        this.movementComponent.setVelocity(velocity);
        this.abstractObject.setField("Velocity", velocity);
    };
    return AbstractMovableObject;
}());
exports.AbstractMovableObject = AbstractMovableObject;
