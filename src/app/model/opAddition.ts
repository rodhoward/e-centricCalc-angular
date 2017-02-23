import { Operation } from '../model';

export class Addition implements Operation {
    public name = 'Addition';
    public precedence = 4;
    public singleInput = false;

    public operator(input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) {
        let result = input1.plus(input2);
        return result;
    }
}