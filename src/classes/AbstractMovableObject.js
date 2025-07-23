"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMovableObject = void 0;
var AbstractMovableObject = /** @class */ (function () {
    function AbstractMovableObject(abstractObject, movementComponent, rotationComponent) {
        this.movementComponent = movementComponent;
        this.rotationComponent = rotationComponent;
        this.abstractObject = abstractObject;
    }
    // IMovable
    AbstractMovableObject.prototype.getLocation = function () {
        return this.movementComponent.getLocation();
    };
    AbstractMovableObject.prototype.setLocation = function (vector) {
        this.movementComponent.setLocation(vector);
    };
    AbstractMovableObject.prototype.getVelocity = function () {
        return this.movementComponent.getVelocity();
    };
    // IRotatable
    AbstractMovableObject.prototype.getDirection = function () {
        return this.rotationComponent.getDirection();
    };
    AbstractMovableObject.prototype.setDirection = function (angle) {
        this.rotationComponent.setDirection(angle);
    };
    AbstractMovableObject.prototype.getAngularVelocity = function () {
        return this.rotationComponent.getAngularVelocity();
    };
    AbstractMovableObject.prototype.getDirectionsNumber = function () {
        return this.rotationComponent.getDirectionsNumber();
    };
    AbstractMovableObject.prototype.setAngularVelocity = function (angle) {
        this.rotationComponent.setAngularVelocity(angle);
    };
    return AbstractMovableObject;
}());
exports.AbstractMovableObject = AbstractMovableObject;
