const prompt = require('prompt-sync')();

const calculator = {
    calculate: function calculate(expression) {
        let array = expression.split(" ");

        let arraySize = array.length;
        if (arraySize > 3) {
            return 'Invalid Expression (Please, use less spaces!)';
        } else if (arraySize < 3) {
            return 'Invalid Expression (Please, use additional spaces!)'
        };


        let firstArgument = parseInt(array[0]);
        let operator = array[1];
        let secondArgument = parseInt(array[2]);

        function isNotNumber(string) {
            if (isNaN(string)) {
                return true;
            } else {
                return false;
            }
        }

        if (isNotNumber(firstArgument)) {
            return 'Invalid first argument. Only numbers are allowed in expression';

        }
        if (isNotNumber(secondArgument)) {
            return 'Invalid second argument. Only numbers are allowed in expression';
        }

        if (operator == "+") {
            return calculator.add(firstArgument, secondArgument);
        } else if (operator == "-") {
            return calculator.subtract(firstArgument, secondArgument);
        } else if (operator == "*") {
            return calculator.multiply(firstArgument, secondArgument);
        } else if (operator == "/") {
            return calculator.divide(firstArgument, secondArgument);
        } else if (operator == "%") {
            return calculator.percent(firstArgument, secondArgument);
        } else {
            return 'Invalid operator! Please, use only "+", "-", "*", "/" or "%"';
        }
    },

    add: function add(a, b) {
        return (a + b);
    },
    subtract: function subtract(a, b) {
        return (a - b);
    },
    multiply: function multuply(a, b) {
        return (a * b);
    },
    divide: function divide(a, b) {
        return (a / b);
    },
    percent: function percent(a, b) {
        return (a * b / 100);
    },
}

//let result = calculator.subtract(30, 5);
//console.log(result)

//something new


/*while (true) {
    console.log('\n\n*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.\n');
    console.log('Please, use space in your mathematical expression!');
    const expression = prompt('You can enter your mathematical expression here: ');
    if (expression == "exit") break;

    console.log(calculator.calculate(expression));
}*/

module.exports = calculator.calculate;
