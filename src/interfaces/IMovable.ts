import {Vector} from "../classes/Vector";
export interface IMovable{
    getLocation(): Vector;
    setLocation(vector: Vector): void;
    getVelocity(): Vector;
}