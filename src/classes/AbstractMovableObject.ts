import {IAbstractObject} from "../interfaces/IAbstractObject";
import {IMovable} from "../interfaces/IMovable";
import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "./Vector";
export class AbstractMovableObject implements IMovable, IRotatable{
    private movementComponent: IMovable;
    private rotationComponent: IRotatable;
    private abstractObject: IAbstractObject;

    constructor(abstractObject:IAbstractObject, movementComponent: IMovable, rotationComponent: IRotatable) {
        this.movementComponent = movementComponent;
        this.rotationComponent = rotationComponent;
        this.abstractObject = abstractObject;
    }
    // IMovable
    getLocation(): Vector {
        return this.movementComponent.getLocation();
    }

    setLocation(vector: Vector): void {
        this.movementComponent.setLocation(vector);
    }

    getVelocity(): Vector {
        return this.movementComponent.getVelocity();
    }

    // IRotatable
    getDirection(): number {
        return this.rotationComponent.getDirection();
    }

    setDirection(angle: number): void {
        this.rotationComponent.setDirection(angle);
    }

    getAngularVelocity(): number {
        return this.rotationComponent.getAngularVelocity();
    }
    getDirectionsNumber(): number {
        return this.rotationComponent.getDirectionsNumber();
    }

    setAngularVelocity(angle: number): void {
        this.rotationComponent.setAngularVelocity(angle);
    }

}