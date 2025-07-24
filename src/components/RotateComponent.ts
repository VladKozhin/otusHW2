import {IRotatable} from "../interfaces/IRotatable";
import {Vector} from "../classes/Vector";

export class RotateComponent implements IRotatable {
    private rotation: number; // угол
    private direction: number; // скорость вращения
    private directionsNumber: number;
    private location: Vector;

    constructor(direction: number) {
        //this.rotation = rotation;
        this.direction = direction;
    }

    getDirection(): number {
        return this.rotation;
    }

    setDirection(angle: number): void {
        this.rotation = angle;
    }

    getDirectionsNumber(): number {
        return this.directionsNumber;
    }

    getLocation(): Vector {
        return this.location;
    }

    setLocation(vector: Vector): void {
        this.location = vector;
    }
}