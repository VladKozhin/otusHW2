import {IRotatable} from "../interfaces/IRotatable";

export class Rotate {
    private target: IRotatable;

    constructor(target: IRotatable) {
        this.target = target;
    }

    public Execute() {
        const a = this.target.getDirection();
        const b = this.target.getAngularVelocity();

        let result = (a +b ) % 360;

        this.target.setDirection(result)
    }
}
