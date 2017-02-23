import { Operation, Addition, Subtraction, Multiplication, Division, SquareByN, SquareRoot } from '../model';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    public operations: Operation[] = [new Addition(), new Subtraction(), new Division(), new Multiplication(), new SquareByN(), new SquareRoot()];

    constructor() {
    }

}