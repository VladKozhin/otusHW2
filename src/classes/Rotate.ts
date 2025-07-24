import {IRotatable} from "../interfaces/IRotatable";
import {IAbstractObject} from "../interfaces/IAbstractObject";
import {Vector} from "./Vector";
export class Rotate {
    private target: IRotatable;

    constructor(target: IRotatable) {
        this.target = target;
    }

    public Execute() {
       /* const v = this.target.getAngularVelocity() //Math.round(Math.sqrt(loc.x * loc.x + loc.y * loc.y));
        const angle = this.target.getDirection();
        const x = this.target.getLocation().x
        const y = this.target.getLocation().y
        console.log(`Current getAngularVelocity: ${v}, getDirection: ${angle}`)
        console.log(`Current x: ${x}, current y: ${y}`)

        const newX = Math.round(x + v * Math.cos(angle));
        const newY = Math.round(y + v * Math.sin(angle));
        console.log("New coordinates: " + newX + " " + newY)
        this.target.setLocation(new Vector(newX, newY));*/

        const vx = this.target.getLocation().x
        const vy = this.target.getLocation().y

        const cosTheta = Math.cos(this.target.getDirection());
        const sinTheta = Math.sin(this.target.getDirection());

        const newVx = Math.round(vx * cosTheta - vy * sinTheta);
        const newVy = Math.round(vx * sinTheta + vy * cosTheta);

        this.target.setLocation(new Vector(newVx, newVy))
    }
}