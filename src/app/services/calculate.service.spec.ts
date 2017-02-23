import { CalculateService, ConfigService } from '../services';
import { Addition, Multiplication, Operation } from '../model';

class MockConfigService extends ConfigService {
    operations = [new Addition(), new Multiplication()];
}

describe('CalculatorService', function () {
    let mockConfigService: MockConfigService;
    let calculatorService: CalculateService;
    let addition: Addition;

    beforeEach(() => {
        mockConfigService = new MockConfigService();
        calculatorService = new CalculateService(mockConfigService);
        addition = new Addition();
    });

    it('should expose the available operations', () => {
        expect(calculatorService.operations.length).toBe(2);
    });

    it('should be the same operations we put in', () => {
        expect(calculatorService.operations[0].name).toBe(addition.name);
    });

    it('should provide a calculate function', () => {
        expect(typeof calculatorService.doCalculation).toBe('function');
    });

    it('The calculate function should delegate to the operator function', () => {
        addition.operator = (input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) => {
            return Big(77);
        }
        expect(calculatorService.doCalculation(addition, 3, 4)).toEqual(77);
    });

    it('The calculate function should return "" when there is an exception', () => {
        addition.operator = (input1: BigJsLibrary.BigJS, input2: BigJsLibrary.BigJS) => {
            throw new Error("test error");
        }
        expect(calculatorService.doCalculation(addition, 3, 4)).toBe(undefined);
    })


});
