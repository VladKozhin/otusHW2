"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractMovableObject_1 = require("./classes/AbstractMovableObject");
var Vector_1 = require("./classes/Vector");
var Move_1 = require("./classes/Move");
var AbstractObject_1 = require("./classes/AbstractObject");
var Rotate_1 = require("./classes/Rotate");
var CheckFuelCommand_1 = require("./classes/CheckFuelCommand");
var BurnFuelCommand_1 = require("./classes/BurnFuelCommand");
var Queue_1 = require("./classes/Queue");
var params = new Map();
params.set("Location", new Vector_1.Vector(5, 5));
params.set("Direction", (90 * Math.PI) / 180);
params.set("Velocity", new Vector_1.Vector(5, 5));
params.set("FuelLevel", 100);
var spaceShip = new AbstractMovableObject_1.AbstractMovableObject(new AbstractObject_1.AbstractObject(params));
var moveExecutor = new Move_1.Move(spaceShip);
var rotateExecutor = new Rotate_1.Rotate(spaceShip);
var fuelBurner = new BurnFuelCommand_1.BurnFuelCommand(spaceShip);
var fuelGetter = new CheckFuelCommand_1.CheckFuelCommand(spaceShip);
var queue = new Queue_1.Queue();
var straightMoveWithBurningFuel = new Queue_1.Queue();
//straightMoveWithBurningFuel.enqueue(fuelGetter.Execute);
straightMoveWithBurningFuel.enqueue(fuelBurner.Execute);
//straightMoveWithBurningFuel.enqueue(moveExecutor.Execute);
console.log(fuelGetter.Execute());
straightMoveWithBurningFuel.Execute();
//queue.enqueue(straightMoveWithBurningFuel);
//queue.enqueue(() =>{fuelBurner.Execute()})
//queue.execute()
console.log(fuelGetter.Execute());
/*
setInterval(() => {
    //moveExecutor.Execute();
    fuelBurner.Execute();
    console.log(spaceShip.getFuelLevel())
}, 1000);
*/ 
