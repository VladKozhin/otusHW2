import {IRotatable} from "../interfaces/IRotatable";
import {IAbstractObject} from "../interfaces/IAbstractObject";
export class Rotate {
    private target: IRotatable;

    constructor(target: IRotatable) {
        this.target = target;
    }

    public Execute() {
        const currentAngle = this.target.getDirection();
        const angularVelocity = this.target.getAngularVelocity();
        const newAngle = currentAngle + angularVelocity;
        this.target.setDirection(newAngle);
    }
}