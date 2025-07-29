import {Vector} from "../classes/Vector";

export interface IRotatable {
    getLocation(): Vector;
    setLocation(vector: Vector): void;

    setDirection(angle: number);
    getDirection(): number;
}