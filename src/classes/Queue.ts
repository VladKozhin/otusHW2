import {IQueue} from "../interfaces/IQueue";

export class Queue implements IQueue{
    private queue: any[] = [];

    enqueue(command: any): void {
        console.log("Func enqueued: " + command)
        this.queue.push(command);
    }

    Execute() {
        const command = this.queue.shift();

        if (command) {
            if(command instanceof Queue){
                command.Execute();
            } else {
                command();
            }
        }
    }

    getCurrentFunc(){
        console.log("Func: " + this.queue.pop())
        return this.queue.pop()
    }

    count():number{
        return this.queue.length
    }
}