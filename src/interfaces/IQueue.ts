export interface IQueue{
    enqueue(command: any):void;
    Execute():void;
    count():number;
    getCurrentFunc():()=>void;
}