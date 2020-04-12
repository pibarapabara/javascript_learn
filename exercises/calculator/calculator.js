const calculator = {
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
}

//let result = calculator.subtract(30, 5);
//console.log(result)

//something new

const prompt = require('prompt-sync')();
while (true) {
    console.log('\n\n*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.\n');
    console.log('Please, use space in your mathematical expression!');
    const expression = prompt('You can enter your mathematical expression here: ');
    if (expression == "exit") break;
    console.log("OK")


    let array = expression.split(" ");

    let arraySize = array.length;

    if (arraySize != 3) {
        console.log('Invalid Expression (Please, use space!)');
        continue;
    }


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
        console.log('Only numbers are allowed in expression');
        continue;
    }
    if (isNotNumber(secondArgument)) {
        console.log('Only numbers are allowed in expression');
        continue;
    }


    if (operator == "+") {
        console.log(calculator.add(firstArgument, secondArgument));
    } else if (operator == "-") {
        console.log(calculator.subtract(firstArgument, secondArgument));
    } else if (operator == "*") {
        console.log(calculator.multiply(firstArgument, secondArgument));
    } else if (operator == "/") {
        console.log(calculator.divide(firstArgument, secondArgument));
    } else {
        console.log('Invalid argument!');
    }
}
