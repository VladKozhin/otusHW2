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

it('Движение с поворотом: после 4-х поворотов объект возвращается на исходную точку', () => {
    let params = new Map();
    const v: Vector = new Vector(5,5);
    params.set("Location", v);
    params.set("Direction", (90 * Math.PI) / 180); //поворачиваем на 90 градусов с постоянной скоростью
    params.set("Velocity", v);

    const obj = new AbstractMovableObject(new AbstractObject(params));
    const rotateExecutor = new Rotate(obj);

    rotateExecutor.Execute();
    rotateExecutor.Execute();
    rotateExecutor.Execute();
    rotateExecutor.Execute();
    expect(obj.getLocation()).toEqual(v);
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


