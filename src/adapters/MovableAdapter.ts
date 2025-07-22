import {IMovable} from "../interfaces/IMovable";
import {IAbstractObject} from "../interfaces/IAbstractObject";
import {Vector} from "../classes/Vector";
export class MovableAdapter implements IMovable {
    obj: IAbstractObject;
    constructor(obj: IAbstractObject) {
        this.obj = obj;
    }
    public getLocation(): Vector {
        return this.obj.getField("Location");
    }

    public setLocation(vector: Vector) {
        this.obj.setField("Location", vector);
    }

    public getVelocity(): Vector {
        const d:number = this.obj.getField("Direction");
        const n:number = this.obj.getField("DirectionsNumber");
        const v:number = this.obj.getField("Velocity")
        return new Vector(
            v * Math.cos(d/360*n),
            v * Math.sin(d/360*n)
        )
    }
}