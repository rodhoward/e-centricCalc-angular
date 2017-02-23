import { SquareByN, Operation } from '../model';
import { toBeAValidOperation } from './operationMatcher.spec';
import * as Big from 'big.js';

describe('SquareByN Operation', function () {
    let operation: Operation;

    beforeEach(() => {
        jasmine.addMatchers({
            toBeAValidOperation
        });
        operation = new SquareByN();
    });

    it('should be a valid operation', () => {
        expect(operation)["toBeAValidOperation"]();
    });

    it('should multiply two integer inputs together', () => {
        expect(operation.operator(Big(2), Big(3)).toString()).toBe('8');
    });

    it('should multiply two float inputs together', () => {
        expect(operation.operator(Big(3), Big(4.1)).toString()).toBe('' + Math.pow(3, 4.1));
    });

    it('should throw exception on invalid input types', () => {
        expect(function () { operation.operator(Big('cat'), Big('dog')); }).toThrowError();
    });

    it('should throw exception on undefined inputs', () => {
        expect(function () { operation.operator(Big(6), undefined); }).toThrowError();
    });

});
