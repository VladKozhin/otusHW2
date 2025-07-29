import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "../classes/Vector";

export class RotateComponent implements IRotatable {
    private direction: number; // угол
    private angularVelocity: number; // скорость вращения
    private directionsNumber: number;

    constructor(direction: number) {
        this.direction = direction;
    }

    getDirection(): number {
        return this.direction;
    }

    setDirection(angle: number): void {
        this.direction = angle;
    }

    getAngularVelocity():number{
        return this.angularVelocity;
    }
    getDirectionsNumber():number{
        return this.directionsNumber;
    }
}
