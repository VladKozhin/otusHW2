import {Vector} from "../classes/Vector";

export interface IRotatable {
    getDirection():number;
    getAngularVelocity():number;
    setDirection(newV:number):void;
    getDirectionsNumber():number;
}