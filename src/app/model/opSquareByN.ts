import { Operation } from '../model';
import * as Big from 'big.js';

export class SquareByN implements Operation {
    public name = 'Square By N';
    public precedence = 2;
    public singleInput = false;

    public operator(input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) {
        let floatInput2 = parseFloat(input2.toString());
        let result: BigJsLibrary.BigJS;
        // Big.js doesn't handle to the power of floats falling back to standard math lib.
        if (this.isFloat(floatInput2)) {
            let r = Math.pow(parseFloat(input1.toString()), floatInput2)
            result = Big(r);
        } else {
            result = input1.pow(parseInt(input2.toString(), 10));
        }
        return result;
    }

    private isFloat(n: number) {
        return Number(n) === n && n % 1 !== 0;
    }
}