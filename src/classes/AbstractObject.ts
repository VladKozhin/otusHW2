import {IAbstractObject} from "../interfaces/IAbstractObject";

export class AbstractObject implements IAbstractObject {
    private params: Map<string, any>;

    constructor(params:Map<string, any>) {
        this.params = params;
    }

    getField(fieldName: string): any {
        if(!this.params.has(fieldName)){
            throw `Field ${fieldName} cant be read!`
        }
        return this.params.get(fieldName);
    }

    setField(key: string, value: Object): void {
        this.params.set(key, value)
    }

    getParams(): Map<string, any> {
        return this.params;
    }
}