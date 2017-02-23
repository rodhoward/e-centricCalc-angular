import { CalculatorComponent } from './calculator.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, NgForm, AbstractControl } from '@angular/forms';
import { NumericInputComponent } from '../numericInput/numericInput.component';
import { CalculateService, ConfigService } from '../services';

import { Addition, Operation } from '../model';

let addition = new Addition();
let calculateServiceStub = {
    operations: [addition],
    doCalculation: () => { return 77; }
}

describe('CalculatorComponent', function () {
    let formElement: DebugElement;
    let buttonElement: DebugElement;
    let inputElements: DebugElement[];
    let comp: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;
    let service: CalculateService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [CalculatorComponent, NumericInputComponent],
            providers: [{ provide: CalculateService, useValue: calculateServiceStub }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorComponent);
        service = fixture.debugElement.injector.get(CalculateService);
        comp = fixture.componentInstance;


        inputElements = fixture.debugElement.queryAll(By.css('my-numeric-input'));
        //selectElement = fixture.debugElement.query(By.css('select'));
        buttonElement = fixture.debugElement.query(By.css('button'));
        formElement = fixture.debugElement.query(By.css('form'));

        fixture.detectChanges(); // initial binding
    });


    it('should create component', () => expect(comp).toBeDefined());

    it('should create the service', () => expect(service).toBeDefined());

    it('should call service.doCalculation when calculate is clicked', () => {
        let input1Value = 4;
        let input2Value = 5;
        let fakeReturnValue = 77;

        comp.input1 = input1Value;
        comp.input2 = input2Value;
        comp.selectedOperation = addition;

        let spy = spyOn(service, 'doCalculation').and.callFake(() => { return fakeReturnValue; });
        comp.onCalculateClicked();
        fixture.detectChanges();

        expect(service.doCalculation).toHaveBeenCalledWith(addition, input1Value, input2Value);
        expect(comp.result).toBe(fakeReturnValue);
    });





});
