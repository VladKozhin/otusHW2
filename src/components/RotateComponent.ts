import {IRotatable} from "../interfaces/IRotatable";

export class RotateComponent implements IRotatable {
    private rotation: number; // угол
    private angularVelocity: number; // скорость вращения
    private directionsNumber: number;

    constructor(rotation: number, angularVelocity: number) {
        this.rotation = rotation;
        this.angularVelocity = angularVelocity;
    }

    getDirection(): number {
        return this.rotation;
    }

    setDirection(angle: number): void {
        this.rotation = angle;
    }

    setAngularVelocity(velocity: number): void {
        this.angularVelocity = velocity;
    }

    getAngularVelocity(): number {
        return this.angularVelocity
    }

    getDirectionsNumber(): number {
        return this.directionsNumber;
    }
}