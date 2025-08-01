import {IFuelable} from "../interfaces/IFuelable";
export class CheckFuelCommand {
    private target: IFuelable;

    constructor(target: IFuelable) {
        this.target = target;
    }

    public Execute() {
        const lvl = this.target.getFuelLevel();
        if(lvl > 0){
            return lvl;
        } else {
            throw new Error("Current fuel level is too low!")
        }
    }
}