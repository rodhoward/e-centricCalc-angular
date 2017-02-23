import { Division, Operation } from '../model';
import { toBeAValidOperation } from './operationMatcher.spec';
import * as Big from 'big.js';

describe('Division Operation', function () {
    let operation: Operation;

    beforeEach(() => {
        jasmine.addMatchers({
            toBeAValidOperation
        });
        operation = new Division();
    });

    it('should be a valid operation', () => {
        expect(operation)["toBeAValidOperation"]();
    });

    it('should divide two integer inputs together', () => {
        expect(operation.operator(Big(8), Big(4)).toString()).toBe('2');
    });

    it('should divide two float inputs together', () => {
        expect(operation.operator(Big(3.3), Big(2)).toString()).toBe('1.65');
    });

    it('should throw exception on invalid input types', () => {
        expect(function () { operation.operator(Big('cat'), Big('dog')); }).toThrowError();
    });

    it('should throw exception on undefined inputs', () => {
        expect(function () { operation.operator(Big(7), undefined); }).toThrowError();
    });

    it('should handle divide by 0 by returning 0', () => {
        expect(operation.operator(Big(4), Big(0)).toString()).toBe('0');
    });

});
