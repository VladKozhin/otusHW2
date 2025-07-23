import {AbstractMovableObject} from "./classes/AbstractMovableObject";
import {Vector} from "./classes/Vector";
import {Move} from "./classes/Move";
import {AbstractObject} from "./classes/AbstractObject";
import {Rotate} from "./classes/Rotate";
import {MoveComponent} from "./components/MoveComponent";
import {RotateComponent} from "./components/RotateComponent";

let params = new Map<string, any>();
params.set("Location", new Vector(12,5));
params.set("Direction", 90);
params.set("Velocity", new Vector(-7,3));
params.set("DirectionsNumber", 8);
params.set("Rotation", 10);
params.set("AngularVelocity", 10);

let spaceShip = new AbstractMovableObject(new AbstractObject(params));

const moveExecutor = new Move(spaceShip);
const rotateExecutor = new Rotate(spaceShip);
setInterval(() => {
    moveExecutor.Execute();
    rotateExecutor.Execute();
    console.log(spaceShip.getLocation())
    console.log(params)
}, 1000);
