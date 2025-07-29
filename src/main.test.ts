import {Vector} from "./classes/Vector";
import {AbstractObject} from "./classes/AbstractObject";
import {AbstractMovableObject} from "./classes/AbstractMovableObject";
import {Move} from "./classes/Move";
import {Rotate} from "./classes/Rotate";

it('Проверка корректности изменения координат при прямолинейном движении', () => {
    let params = new Map();
    params.set("Location", new Vector(12,5));
    params.set("Velocity", new Vector(-7,3));
    params.set("Direction", 0);

    const obj = new AbstractMovableObject(new AbstractObject(params));
    const moveExecutor = new Move(obj);

    expect(obj.getLocation()).toEqual(new Vector(12, 5));
    moveExecutor.Execute();
    expect(obj.getLocation()).toEqual(new Vector(5, 8));
});

it('Поворот: при изменении угла поворота на 90 градусов при изначальных 300 текущий угол становится 30 градусов', () => {
    let params = new Map();
    params.set("Location", new Vector(5,5));
    params.set("Direction", 300);
    params.set("Velocity", new Vector(0,0));
    params.set("DirectionsNumber", 8);
    params.set("AngularVelocity", 90);

    let spaceShip = new AbstractMovableObject(new AbstractObject(params));

    const rotateExecutor = new Rotate(spaceShip);

    rotateExecutor.Execute();
    expect(spaceShip.getDirection()).toEqual(30);
});

it('Отсутствуют координаты', () => {
    let params = new Map();
    //params.set("Location", new Vector(12,5));
    params.set("Velocity", new Vector(-7,3));
    params.set("Direction", 0);

    expect(() => new AbstractMovableObject(new AbstractObject(params))).toThrow('Field Location cant be read!');
});

it('Отсутствует скорость', () => {
    let params = new Map();
    params.set("Location", new Vector(12,5));
    //params.set("Velocity", new Vector(-7,3));
    params.set("Direction", 0);

    expect(() => new AbstractMovableObject(new AbstractObject(params))).toThrow('Field Velocity cant be read!');
});


