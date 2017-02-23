import { Component } from '@angular/core';
import { Operation } from '../model';
import { CalculateService } from '../services';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-calculator',
    templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
    input1: number;
    input2: number;
    selectedOperation: Operation;
    operations: Operation[];
    result: number;
    calcForm: NgForm;

    constructor(private calculateService: CalculateService) {
        this.operations = calculateService.operations;
        this.selectedOperation = this.operations[0];
    }

    onCalculateClicked() {
        this.result = this.calculateService.doCalculation(this.selectedOperation, this.input1, this.input2);
    }
}