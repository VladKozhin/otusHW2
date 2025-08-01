import {IFuelable} from "../interfaces/IFuelable";
export class BurnFuelCommand {
    private target: IFuelable;

    constructor(target: IFuelable) {
        this.target = target;
    }

    public Execute() {
        const lvl = this.target.getFuelLevel();
        if(lvl > 0){
            this.target.burnFuel();
        } else {
            throw new Error("Current fuel level is too low!")
        }

    }
}