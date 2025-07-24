export class Vector{
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    public add(vector: Vector): Vector {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
}