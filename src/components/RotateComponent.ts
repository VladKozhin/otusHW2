import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "../classes/Vector";

export class RotateComponent implements IRotatable {
    private angle: number;

    constructor(angle: number) {
        this.angle = angle;
    }

    getDirection(): number {
        return this.angle;
    }

    setDirection(angle: number): void {
        this.angle = angle;
    }

    /*getDirectionsNumber(): number {
        return this.directionsNumber;
    }

    getLocation(): Vector {
        return this.location;
    }

    setLocation(vector: Vector): void {
        this.location = vector;
    }*/
}