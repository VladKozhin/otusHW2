import {MovableAdapter} from "../adapters/MovableAdapter";
import {IAbstractObject} from "../interfaces/IAbstractObject";
import {Move} from "./Move";
export class SpaceShip extends Move implements IAbstractObject{
    params: Map<string, any>;

    constructor(params:Map<string, any>) {
        super();
        this.params = params;
    }

    getField(fieldName: string): any {
        if(!this.params.has(fieldName)){
            throw `Поле ${fieldName} отсутствует у объекта!`
        }
        return this.params.get(fieldName);
    }

    setField(key: string, value: Object): void {
        this.params.set(key, value)
    }
}