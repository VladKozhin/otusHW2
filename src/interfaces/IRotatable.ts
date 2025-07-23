export interface IRotatable {
    setDirection(angle: number);
    getDirection(): number;
    setAngularVelocity(velocity: number);
    getAngularVelocity(): number;
    getDirectionsNumber(): number;
}