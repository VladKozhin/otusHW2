import {AbstractMovableObject} from "./classes/AbstractMovableObject";
import {Vector} from "./classes/Vector";
import {Move} from "./classes/Move";
import {AbstractObject} from "./classes/AbstractObject";
import {Rotate} from "./classes/Rotate";
import {FuelComponent} from "./components/FuelComponent";
import {CheckFuelCommand} from "./classes/CheckFuelCommand";
import {BurnFuelCommand} from "./classes/BurnFuelCommand";
import {Queue} from "./classes/Queue";

let params = new Map<string, any>();
params.set("Location", new Vector(0,0));
params.set("Direction", 0);
params.set("Velocity", new Vector(5,0));
params.set("FuelLevel", 100);

let spaceShip = new AbstractMovableObject(new AbstractObject(params));

const moveExecutor = new Move(spaceShip);
const rotateExecutor = new Rotate(spaceShip, 90);
const queue = new Queue();

const ChangeVelocityCommand = new Queue();
ChangeVelocityCommand.enqueue(() => spaceShip.setVelocity(spaceShip.clarificateDirection()))

queue.enqueue(() => {rotateExecutor.Execute()})
queue.enqueue(() => {ChangeVelocityCommand.Execute()})
queue.enqueue(() => {moveExecutor.Execute()})

queue.Execute()

console.log(spaceShip.getLocation())
