/*import {AbstractMovableObject} from "./classes/AbstractMovableObject";
import {Vector} from "./classes/Vector";
import {Move} from "./classes/Move";
import {AbstractObject} from "./classes/AbstractObject";
import {Rotate} from "./classes/Rotate";

let params = new Map<string, any>();
params.set("Location", new Vector(5,5));
params.set("Direction", 90); //(90 * Math.PI) / 180
params.set("Velocity", new Vector(0,0));
params.set("DirectionsNumber", 8);
params.set("AngularVelocity", 90);


let spaceShip = new AbstractMovableObject(new AbstractObject(params));

const moveExecutor = new Move(spaceShip);
const rotateExecutor = new Rotate(spaceShip);
setInterval(() => {
    //moveExecutor.Execute();
    rotateExecutor.Execute();
    console.log(spaceShip.getDirection())
}, 1000);
*/ 
