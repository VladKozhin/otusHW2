import {IMovable} from "../interfaces/IMovable";
import {Vector} from "../classes/Vector";

export class MoveComponent implements IMovable {
    private location: Vector;
    private velocity: Vector;

    constructor(location: Vector, velocity: Vector) {
        this.location = location;
        this.velocity = velocity;
    }

    getLocation(): Vector {
        return this.location;
    }

    setLocation(vector: Vector): void {
        this.location = vector;
    }

    getVelocity(): Vector {
        return this.velocity;
    }
}