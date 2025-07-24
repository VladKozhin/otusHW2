"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMovableObject_1 = require("./classes/AbstractMovableObject");
const Vector_1 = require("./classes/Vector");
const Move_1 = require("./classes/Move");
const AbstractObject_1 = require("./classes/AbstractObject");
const Rotate_1 = require("./classes/Rotate");
let params = new Map();
//params.set("Location", new Vector(12,5));
params.set("Direction", 0);
params.set("Velocity", new Vector_1.Vector(-7, 3));
let spaceShip = new AbstractMovableObject_1.AbstractMovableObject(new AbstractObject_1.AbstractObject(params));
const moveExecutor = new Move_1.Move(spaceShip);
const rotateExecutor = new Rotate_1.Rotate(spaceShip);
setInterval(() => {
    moveExecutor.Execute();
    //rotateExecutor.Execute();
    console.log(spaceShip.getLocation());
    //console.log(params)
}, 1000);
