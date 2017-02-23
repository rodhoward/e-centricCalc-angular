import { Operation } from '../model';

export class SquareRoot implements Operation {
    public name = 'Square Root';
    public precedence = 2;
    public singleInput = true;

    public operator(input1: BigJsLibrary.BigJS) {
        let result = input1.sqrt();
        return result;
    }
}