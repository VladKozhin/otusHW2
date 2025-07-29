"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
class Rotate {
    constructor(target) {
        this.target = target;
    }
    Execute() {
        /*
        * Предположим, что переменные могут быть как положительными, так и отрицательными.
        * Тогда надо отдельно обработать эти случаи
        * */
        const a = this.target.getDirection();
        const b = this.target.getAngularVelocity();
        const c = this.target.getDirectionsNumber();
        console.log(`Direction: ${a}, AngVelocity: ${b}, DirsNUmber: ${c}`);
        let result = 0;
        if (a < 0 || b < 0) {
            result = Math.trunc((a + b) / c);
        }
        else {
            result = Math.floor((a + b) / c);
        }
        this.target.setDirection(result);
    }
}
exports.Rotate = Rotate;
