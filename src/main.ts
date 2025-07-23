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
params.set("DirectionsNumber", 8);

const moveComp = new MoveComponent(new Vector(0,0), new Vector(10,0));
const rotateComp = new RotateComponent(10, Math.PI/180 * 5);

let spaceShip = new AbstractMovableObject(new AbstractObject(params), moveComp, rotateComp);

const moveExecutor = new Move(spaceShip);
const rotateExecutor = new Rotate(spaceShip);
setInterval(() => {
    moveExecutor.Execute();
    rotateExecutor.Execute();
    console.log(spaceShip.getLocation())
}, 1000);
