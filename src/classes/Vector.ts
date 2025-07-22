export class Vector{
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    static Addition(first: Vector, second: Vector): Vector {
        return new Vector(first.x + second.x, first.y + second.y);
    }
}