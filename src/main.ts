import {SpaceShip} from "./classes/SpaceShip";
import {MovableAdapter} from "./adapters/MovableAdapter";
import {Vector} from "./classes/Vector";
import {Move} from "./classes/Move";

let params = new Map<string, any>();
params.set("Location", new Vector(12,5));
params.set("Velocity", new Vector(-7, 3));
params.set("Direction", 90);
params.set("DirectionsNumber", 8);

let ship = new MovableAdapter(
    new SpaceShip(params)
);
Move.execute(ship)
//ship.setLocation(new Vector(1, 4));

console.log(ship.getLocation())