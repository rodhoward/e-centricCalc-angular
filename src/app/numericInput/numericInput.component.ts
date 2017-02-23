import { Component, forwardRef, ViewEncapsulation, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

@Component({
    moduleId: module.id,
    selector: 'my-numeric-input',
    templateUrl: './numericInput.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumericInputComponent),
            multi: true
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class NumericInputComponent implements ControlValueAccessor {
    _value: string;

    // place holder until registerOnChange is called.
    propagateChange = (_: number) => { };
    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor    
    private onChangeCallback: (_: any) => void = noop;

    constructor() {
    }

    writeValue(value: string | number): void {
        if (!value) {
            this._value = undefined;
        } else {
            this._value = "" + value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(): void {
    }

    setDisabledState?(): void {
    }

    onChange() {
        let numValue = parseFloat(this._value);
        this.onChangeCallback(numValue);
    }
}