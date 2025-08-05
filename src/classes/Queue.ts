import {IQueue} from "../interfaces/IQueue";

type Command = () => any | Queue;

export class Queue implements IQueue{
    private commands: Command[] = [];

    public enqueue(command: Command): void {
        this.commands.push(command);
    }

    public Execute():void {
        for (const cmd of this.commands) {
            if (cmd instanceof Queue) {
                cmd.Execute();
            } else if (typeof cmd === 'function') {
                cmd();
            }
        }
    }
    public count():number{
        return this.commands.length
    }
    getCurrentFunc():()=>void{
        return this.commands.pop();
    }
}