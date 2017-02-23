import { Operation } from '../model/index';
import { ConfigService } from '../services/index';
import { Injectable } from '@angular/core';
import * as Big from 'big.js';

@Injectable()
export class CalculateService {

    constructor(private config: ConfigService) {
    }

    public get operations(): Operation[] {
        return this.config.operations;
    }

    public doCalculation(operation: Operation, input1: number, input2?: number) {
        try {
            let bigInput1 = Big(input1),
                bigInput2 = Big(input2);
            let result = operation.operator(bigInput1, bigInput2);
            return parseFloat(result.toString());
        } catch (e) {
            // FIXME: Display error messages in an application consistaint way e.g. Dialog, Toast pop up etc.
            console.error(e);
            return;
        }
    }

}
