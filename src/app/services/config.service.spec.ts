import { ConfigService } from '../services';
import { Addition, Multiplication, Operation } from '../model';


describe('ConfigService', function () {
    let configService: ConfigService;
    let addition: Addition;

    beforeEach(() => {
        configService = new ConfigService();
        let addition = new Addition();
    });

    it('should expose the available operations', () => {
        expect(typeof configService.operations).toBe('object');
    });

    it('there should be a number of operations', () => {
        expect(configService.operations.length).toBeGreaterThan(2);
    });

});
