/*
Precedence
1. Parentheses (simplify inside 'em)
2. Exponents
3. Multiplication and Division (from left to right)
4. Addition and Subtraction (from left to right)
*/

export interface Operation {
    name: string;
    operator(input1: BigJsLibrary.BigJS, input2?: BigJsLibrary.BigJS): BigJsLibrary.BigJS;
    precedence: number;
    singleInput: boolean;
}