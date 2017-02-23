

const operationProperties = ['name', 'precedence', 'singleInput'];

function toBeAValidOperation() {
    return {
        compare: function (actual: Object) {
            let missingProperties: string[] = [];
            let valid: boolean = true;

            operationProperties.forEach((prop) => {
                if (!actual.hasOwnProperty(prop)) {
                    valid = false;
                    missingProperties.push(prop);
                }
            });

            if (!actual["operator"]) {
                valid = false;
                missingProperties.push('operator');
            }

            let msg = valid ? " is valid operation" : " is not a valid operation missing " + missingProperties.join(',');

            return {
                pass: valid,
                message: missingProperties.join(',')
            }

        }
    }
}

export { toBeAValidOperation }