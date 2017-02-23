import { Subtraction, Operation } from '../model';
import { toBeAValidOperation } from './operationMatcher.spec';
import * as Big from 'big.js';

describe('Subtraction Operation', function () {
    let operation: Operation;

    beforeEach(() => {
        jasmine.addMatchers({
            toBeAValidOperation
        });
        operation = new Subtraction();
    });

    it('should be a valid operation', () => {
        expect(operation)["toBeAValidOperation"]();
    });

    it('should subtract two integer inputs together', () => {
        expect(operation.operator(Big(8), Big(4)).toString()).toBe('4');
    });

    it('should subtract two float inputs together', () => {
        expect(operation.operator(Big(3.3), Big(2.1)).toString()).toBe('1.2');
    });

    it('should throw exception on invalid input types', () => {
        expect(function () { operation.operator(Big('cat'), Big('dog')); }).toThrowError();
    });

    it('should throw exception on undefined inputs', () => {
        expect(function () { operation.operator(Big(6), undefined); }).toThrowError();
    });

});
