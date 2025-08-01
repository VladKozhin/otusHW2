import {Vector} from "./classes/Vector";
import {AbstractObject} from "./classes/AbstractObject";
import {AbstractMovableObject} from "./classes/AbstractMovableObject";
import {Move} from "./classes/Move";
import {Rotate} from "./classes/Rotate";
import {BurnFuelCommand} from "./classes/BurnFuelCommand";
import {CheckFuelCommand} from "./classes/CheckFuelCommand";

it('CheckFuelCommand выбрасывает исключение, если запас топлива не указан', () => {
    let params = new Map<string, any>();
    params.set("Location", new Vector(5,5));
    params.set("Direction", (90 * Math.PI) / 180);
    params.set("Velocity", new Vector(5,5));

    expect(() => new CheckFuelCommand(new AbstractMovableObject(new AbstractObject(params))).Execute()).toThrow('Field FuelLevel cant be read!');
});

it('CheckFuelCommand выбрасывает исключение, если запас топлива равен 0', () => {
    let params = new Map<string, any>();
    params.set("Location", new Vector(5,5));
    params.set("Direction", (90 * Math.PI) / 180);
    params.set("Velocity", new Vector(5,5));

    params.set("FuelLevel", 0);
    expect(() => new CheckFuelCommand(new AbstractMovableObject(new AbstractObject(params))).Execute()).toThrow('Current fuel level is too low!');
});

it('BurnFuelCommand выбрасывает исключение, если производится попытка сжечь топливо, если его значение не указано', () => {
    let params = new Map<string, any>();
    params.set("Location", new Vector(5,5));
    params.set("Direction", (90 * Math.PI) / 180);
    params.set("Velocity", new Vector(5,5));

    expect(() => new BurnFuelCommand(new AbstractMovableObject(new AbstractObject(params))).Execute()).toThrow('Field FuelLevel cant be read!');
});

it('BurnFuelCommand выбрасывает исключение, если производится попытка сжечь топливо, если его значение равно 0', () => {
    let params = new Map<string, any>();
    params.set("Location", new Vector(5,5));
    params.set("Direction", (90 * Math.PI) / 180);
    params.set("Velocity", new Vector(5,5));

    params.set("FuelLevel", 0);
    expect(() => new BurnFuelCommand(new AbstractMovableObject(new AbstractObject(params))).Execute()).toThrow('Current fuel level is too low!');
});

it('BurnFuelCommand сжигает единицу топлива (5 -> 4)', () => {
    let params = new Map<string, any>();
    params.set("Location", new Vector(5,5));
    params.set("Direction", (90 * Math.PI) / 180);
    params.set("Velocity", new Vector(5,5));

    params.set("FuelLevel", 5);
    const obj = new AbstractMovableObject(new AbstractObject(params))
    new BurnFuelCommand(obj).Execute()

    expect(new CheckFuelCommand(obj).Execute()).toEqual(4);
});

/*
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

*/
