import {IRotatable} from "../interfaces/IRotatable";
import {IAbstractObject} from "../interfaces/IAbstractObject";
export class RotatableAdapter implements IRotatable {
    obj: IAbstractObject;
    constructor(obj: IAbstractObject) {
        this.obj = obj;
    }

    public getDirectionsNumber():number{
        return this.obj.getField("DirectionsNumber")
    }

    public setAngularVelocity(velocity: number) {
        this.obj.setField("AngularVelocity", velocity);
    }

    public getDirection(): number {
        const d:number = this.obj.getField("Direction");
        const n:number = this.obj.getField("DirectionsNumber");
        const v:number = this.obj.getField("Velocity")
        return 0; /*new Vector(
            v * Math.cos(d/360*n),
            v * Math.sin(d/360*n)
        )*/
    }

    public setDirection(){

    }
}