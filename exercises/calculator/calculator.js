const calculator = {
    add: function add(a, b) {
        return (Number(a) + Number(b));
    },
    subtract: function subtract(a, b) {
        return (Number(a) - Number(b));
    },
    multiply: function multuply(a, b) {
        return (Number(a) * Number(b));
    },
    divide: function divide(a, b) {
        return (Number(a) / Number(b));
    },
}

//let result = calculator.subtract(30, 5);
//console.log(result)

//something new

const prompt = require('prompt-sync')();
while (true) {
    console.log('\n\n*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.\n');
    console.log('Please, use spacebar in your mathematical expression!');
    const expression = prompt('You can enter your mathematical expression here: ');
    if (expression == "exit") break;
    console.log("OK")


    let array = expression.split(" ");

    let arraySize = array.length;

    if (arraySize != 3) {
        console.log('Invalid Expression (Please, use spacebar!)');
        continue;
    }
    ;

    let firstArgument = array[0];
    let operator = array[1];
    let secondArgument = array[2];

    function checkNumber(string) {
        if (isNaN(string) == false) {
            return true;
        } else {
            console.log('Only numbers are allowed in expression');
            valid = false;
            return false;
        }
    }

    if (!checkNumber(firstArgument)) {
        continue;
    }
    ;
    if (!checkNumber(secondArgument)) {
        continue;
    }
    ;


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
