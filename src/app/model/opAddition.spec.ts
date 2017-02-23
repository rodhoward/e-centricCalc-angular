import { Addition, Operation } from '../model';
import { toBeAValidOperation } from './operationMatcher.spec';
import * as Big from 'big.js';

describe('Addition Operation', function () {
    let operation: Operation;

    beforeEach(() => {
        jasmine.addMatchers({
            toBeAValidOperation
        });
        operation = new Addition();
    });

    it('should be a valid operation', () => {
        expect(operation)["toBeAValidOperation"]();
    });

    it('should add two integer inputs together', () => {
        expect(operation.operator(Big(3), Big(4)).toString()).toBe('7');
    });

    it('should add two float inputs together', () => {
        expect(operation.operator(Big(3.3), Big(4.1)).toString()).toBe('7.4');
    });

    it('should return exception on invalid input types', () => {
        expect(function () { operation.operator(Big('cat'), Big('dog')); }).toThrowError();
    });

});
