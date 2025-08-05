import {IAbstractObject} from "../interfaces/IAbstractObject";
import {IMovable} from "../interfaces/IMovable";
import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "./Vector";
import {MoveComponent} from "../components/MoveComponent";
import {RotateComponent} from "../components/RotateComponent";
import {IFuelable} from "../interfaces/IFuelable";
export class AbstractMovableObject implements IMovable, IRotatable, IFuelable{
    public movementComponent: IMovable;
    public rotationComponent: IRotatable;
    public abstractObject: IAbstractObject;
    public fuelComponent: IFuelable;

    constructor(abstractObject:IAbstractObject) {
        const location = abstractObject.getField('Location') as Vector;
        const velocity = abstractObject.getField('Velocity') as Vector;
        const rotation = abstractObject.getField('Direction') as number;
        this.movementComponent = new MoveComponent(location, velocity);
        this.rotationComponent = new RotateComponent(rotation);
        this.abstractObject = abstractObject;
    }

    getFuelLevel(): number {
        return this.abstractObject.getField("FuelLevel");
    }
    burnFuel() {
        this.abstractObject.setField("FuelLevel", this.abstractObject.getField("FuelLevel")-1);
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

    clarificateDirection(){
        const initialVelocity = this.movementComponent.getVelocity();
        const direction = this.rotationComponent.getDirection();
        const angleRad = (direction * Math.PI) / 180;
        return new Vector(
            Math.round(initialVelocity.x * Math.cos(angleRad) - initialVelocity.y * Math.sin(angleRad)),
            Math.round(initialVelocity.x * Math.sin(angleRad) + initialVelocity.y * Math.cos(angleRad))
        )
    }

    setVelocity(velocity: Vector) {
        this.movementComponent.setVelocity(velocity);
        this.abstractObject.setField("Velocity", velocity);
    }
}