import { Operation } from '../model';
export class Inputs {
    constructor(public operation: Operation, public input1: number, public input2?: number) {

    }
}