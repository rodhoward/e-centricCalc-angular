# Prototype Calculator

Building a simple Calculator to demonstrate Angular2 features and development process.

## Explanation of approach

The spec seemed to indicate a form like approach with two input's and a operation selection. This isn't how a normal calculator works so by including precedence in each of the operations
it should be possible to extend the application to parse a single text input and out put correct results. I am assuming this is outside the scope.

The spec explicitly said its not required to insert thousand separators this could be done using a pipe.

Component testing could have been more through but I couldn't get my numericInput control to hold/display the values inside the test runner. Which made it impossible to test the elements properly.

## Prerequisites
Node.js v4 and npm v3.
    
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm test
```

To run the application use:

```shell
npm start
```
