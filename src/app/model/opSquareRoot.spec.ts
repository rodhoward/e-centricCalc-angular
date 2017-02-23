import { SquareRoot, Operation } from '../model';
import { toBeAValidOperation } from './operationMatcher.spec';
import * as Big from 'big.js';

describe('SquareRoot Operation', function () {
    let operation: Operation;

    beforeEach(() => {
        jasmine.addMatchers({
            toBeAValidOperation
        });
        operation = new SquareRoot();
    });

    it('should be a valid operation', () => {
        expect(operation)["toBeAValidOperation"]();
    });

    it('should square root an integer', () => {
        expect(operation.operator(Big(4)).toString()).toBe('2');
    });

    it('should square root a float', () => {
        expect(operation.operator(Big(19.36)).toString()).toBe('4.4');
    });

    it('should throw exception on invalid input types', () => {
        expect(function () { operation.operator(Big('cat')); }).toThrowError();
    });

    it('should throw exception on undefined inputs', () => {
        expect(function () { operation.operator(undefined); }).toThrowError();
    });

});