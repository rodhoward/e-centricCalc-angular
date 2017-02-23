import { Operation } from '../model';

export class Subtraction implements Operation {
    public name = 'Subtraction';
    public precedence = 4;
    public singleInput = false;

    public operator(input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) {
        let result = input1.minus(input2);
        return result;
    }
}