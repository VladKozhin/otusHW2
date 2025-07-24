import {IMovable} from "../interfaces/IMovable";
export class Move {
    private target: IMovable;

    constructor(target: IMovable) {
        this.target = target;
    }

    public Execute() {
        const location = this.target.getLocation();
        const velocity = this.target.getVelocity();
        const newLocation = location.add(velocity);
        this.target.setLocation(newLocation);
    }
}