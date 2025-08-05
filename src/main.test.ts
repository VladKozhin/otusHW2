import {Vector} from "./classes/Vector";
import {AbstractObject} from "./classes/AbstractObject";
import {AbstractMovableObject} from "./classes/AbstractMovableObject";
import {Move} from "./classes/Move";
import {Rotate} from "./classes/Rotate";
import {BurnFuelCommand} from "./classes/BurnFuelCommand";
import {CheckFuelCommand} from "./classes/CheckFuelCommand";
import {Queue} from "./classes/Queue";

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

it('Макрокоманда: перемещение со сжиганием топлива', () => {
    /*
    * Ожидается, что объект переместится из точки (5, 5) в точку (10, 10) и затратит на это 1 единицу топлива из 100
    * */
    let params = new Map<string, any>();
    params.set("Location", new Vector(5,5));
    params.set("Direction", (90 * Math.PI) / 180);
    params.set("Velocity", new Vector(5,5));
    params.set("FuelLevel", 100);

    let spaceShip = new AbstractMovableObject(new AbstractObject(params));

    const moveExecutor = new Move(spaceShip);
    const fuelBurner = new BurnFuelCommand(spaceShip)
    const fuelGetter = new CheckFuelCommand(spaceShip)
    const queue = new Queue();

    //макрокоманда
    const straightMoveWithBurningFuel = new Queue();
    straightMoveWithBurningFuel.enqueue(()=>{fuelGetter.Execute()});
    straightMoveWithBurningFuel.enqueue(()=>{moveExecutor.Execute()});
    straightMoveWithBurningFuel.enqueue(()=>{fuelBurner.Execute()});

    queue.enqueue(()=>{straightMoveWithBurningFuel.Execute()})
    queue.Execute()

    expect(fuelGetter.Execute()).toEqual(99);
    expect(spaceShip.getLocation()).toEqual(new Vector(10,10));
});

it('Макрокоманда: движение с перемещением и поворотом', () => {
    /*
    * Ожидается, что перед началом движения из центра координат происходит поворот на 90 градусов
    * */
    let params = new Map<string, any>();
    params.set("Location", new Vector(0,0));
    params.set("Direction", 0);
    params.set("Velocity", new Vector(5,0));
    params.set("FuelLevel", 100);

    let spaceShip = new AbstractMovableObject(new AbstractObject(params));

    const moveExecutor = new Move(spaceShip);
    const rotateExecutor = new Rotate(spaceShip, 90);
    const queue = new Queue();

    //макрокоманда из одной команды
    const ChangeVelocityCommand = new Queue();
    ChangeVelocityCommand.enqueue(() => spaceShip.setVelocity(spaceShip.clarificateDirection()))

    //предварительный поворот
    queue.enqueue(() => {rotateExecutor.Execute()})
    //поправки вектора скорости
    queue.enqueue(() => {ChangeVelocityCommand.Execute()})
    //движение
    queue.enqueue(() => {moveExecutor.Execute()})

    queue.Execute()

    expect(spaceShip.getLocation()).toEqual(new Vector(0,5));
    expect(spaceShip.getDirection()).toEqual(90);
});