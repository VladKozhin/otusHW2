import {IMovable} from "../interfaces/IMovable";
import {Vector} from "./Vector";
export class Move {
    private static a: IMovable;
    public Move(a: IMovable):void{
        Move.a = a;
    }
    public static execute(a){
        a.setLocation(
            Vector.Addition(
                a.getLocation(),
                a.getVelocity()
            )
        )
    }
}