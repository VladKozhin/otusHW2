import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "./Vector";
export class Rotate {
    private target: IRotatable;

    constructor(target: IRotatable) {
        this.target = target;
    }

    public Execute() {
        const vx = this.target.getLocation().x
        const vy = this.target.getLocation().y

        const cosTheta = Math.cos(this.target.getDirection());
        const sinTheta = Math.sin(this.target.getDirection());

        const newVx = Math.round(vx * cosTheta - vy * sinTheta);
        const newVy = Math.round(vx * sinTheta + vy * cosTheta);

        this.target.setLocation(new Vector(newVx, newVy))
    }
}