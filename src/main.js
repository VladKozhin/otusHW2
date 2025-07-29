"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMovableObject_1 = require("./classes/AbstractMovableObject");
const Vector_1 = require("./classes/Vector");
const Move_1 = require("./classes/Move");
const AbstractObject_1 = require("./classes/AbstractObject");
const Rotate_1 = require("./classes/Rotate");
let params = new Map();
params.set("Location", new Vector_1.Vector(5, 5));
params.set("Direction", 90); //(90 * Math.PI) / 180
params.set("Velocity", new Vector_1.Vector(0, 0));
params.set("DirectionsNumber", 8);
params.set("AngularVelocity", 90);
let spaceShip = new AbstractMovableObject_1.AbstractMovableObject(new AbstractObject_1.AbstractObject(params));
const moveExecutor = new Move_1.Move(spaceShip);
const rotateExecutor = new Rotate_1.Rotate(spaceShip);
setInterval(() => {
    //moveExecutor.Execute();
    rotateExecutor.Execute();
    console.log(spaceShip.getDirection());
}, 1000);
