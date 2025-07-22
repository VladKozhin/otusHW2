export interface IRotatable {
    setDirection(angle: number);
    getDirection(): number;
    setAngularVelocity(velocity: number);
    getDirectionsNumber(): number;
}