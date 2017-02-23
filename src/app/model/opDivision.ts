import { Operation } from '../model';
import * as Big from 'big.js';

export class Division implements Operation {
    public name = 'Division';
    public precedence = 3;
    public singleInput = false;

    public operator(input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) {
        if (input2.eq(0)) {
            return Big(0);
        }
        let result = input1.div(input2);
        return result;
    }
}