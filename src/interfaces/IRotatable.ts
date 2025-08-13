export interface IRotatable {
    getDirection():number;
    setDirection(newV:number):void;
    getAngularVelocity():number;
    getDirectionsNumber():number;
}