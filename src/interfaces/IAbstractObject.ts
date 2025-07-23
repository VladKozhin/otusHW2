export interface IAbstractObject {
    getField(fieldName: string): any;
    setField(key: string, value: Object):void;
    getParams():Map<string, any>;
}

