import {IAbstractObject} from "../interfaces/IAbstractObject";
import {IMovable} from "../interfaces/IMovable";
import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "./Vector";
import {MoveComponent} from "../components/MoveComponent";
import {RotateComponent} from "../components/RotateComponent";

export class AbstractMovableObject implements IMovable, IRotatable{
    public movementComponent: IMovable;
    public rotationComponent: IRotatable;
    public abstractObject: IAbstractObject;

    constructor(abstractObject:IAbstractObject) {
        const location = abstractObject.getField('Location') as Vector;
        const velocity = abstractObject.getField('Velocity') as Vector;
        const rotation = abstractObject.getField('Direction') as number;
        this.movementComponent = new MoveComponent(location, velocity);
        this.rotationComponent = new RotateComponent(rotation);
        this.abstractObject = abstractObject;
    }
    // IMovable
    getLocation(): Vector {
        return this.abstractObject.getField("Location")
    }

    setLocation(vector: Vector): void {
        this.abstractObject.setField("Location", vector)
        this.movementComponent.setLocation(vector);
    }

    getVelocity(): Vector {
        return this.movementComponent.getVelocity();
    }

    // IRotatable
    getDirection(): number {
        return this.abstractObject.getField("Direction")
    }

    setDirection(angle: number): void {
        this.rotationComponent.setDirection(angle);
        this.abstractObject.setField("Direction", angle)
    }
}
