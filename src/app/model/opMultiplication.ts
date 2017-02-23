import { Operation } from '../model';

export class Multiplication implements Operation {
    public name = 'Multiplication';
    public precedence = 3;
    public singleInput = false;

    public operator(input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) {
        let result = input1.times(input2);
        return result;
    }
}