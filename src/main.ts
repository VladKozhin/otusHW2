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
params.set("Location", new Vector(5,5));
params.set("Direction", (90 * Math.PI) / 180);
params.set("Velocity", new Vector(5,5));
params.set("FuelLevel", 100);

let spaceShip = new AbstractMovableObject(new AbstractObject(params));

const moveExecutor = new Move(spaceShip);
const rotateExecutor = new Rotate(spaceShip);
const fuelBurner = new BurnFuelCommand(spaceShip)
const fuelGetter = new CheckFuelCommand(spaceShip)
const queue = new Queue();

const straightMoveWithBurningFuel = new Queue();
//straightMoveWithBurningFuel.enqueue(fuelGetter.Execute);
straightMoveWithBurningFuel.enqueue(fuelBurner.Execute);
//straightMoveWithBurningFuel.enqueue(moveExecutor.Execute);
console.log(fuelGetter.Execute())
straightMoveWithBurningFuel.Execute()
//queue.enqueue(straightMoveWithBurningFuel);
//queue.enqueue(() =>{fuelBurner.Execute()})
//queue.execute()
console.log(fuelGetter.Execute())
/*
setInterval(() => {
    //moveExecutor.Execute();
    fuelBurner.Execute();
    console.log(spaceShip.getFuelLevel())
}, 1000);
*/