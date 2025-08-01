import {IFuelable} from "../interfaces/IFuelable";

export class FuelComponent implements IFuelable {
    private fuelLevel: number;
    constructor(fuelLevel: number) {
        this.fuelLevel = fuelLevel;
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    burnFuel(): void {
        this.fuelLevel --;
    }
}