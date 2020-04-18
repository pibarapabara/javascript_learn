const {test, assertEquals, runKUnit} = require("../kunit/kunit");
const calculate = require("./calculator.js");

test("Addition", function () {
    const actual = calculate("2 + 2");
    const expected = 4;
    assertEquals(actual, expected);
});

test("Subtract", function () {
    const actual = calculate("9 - 5");
    const expected = 4;
    assertEquals(actual, expected);
});

test("Multiply", function () {
    const actual = calculate("5 * 3");
    const expected = 15;
    assertEquals(actual, expected);
});

test("Divide", function () {
    const actual = calculate("16 / 4");
    const expected = 4;
    assertEquals(actual, expected);
});

test("Percent", function () {
    const actual = calculate("35 % 20");
    const expected = 7;
    assertEquals(actual, expected);
});

test("First argument", function () {
    const actual = calculate("a + 8");
    const expected = 'Invalid first argument. Only numbers are allowed in expression';
    assertEquals(actual, expected);
});

test("Second argument", function () {
    const actual = calculate("8 + b");
    const expected = 'Invalid second argument. Only numbers are allowed in expression';
    assertEquals(actual, expected);
});

test("Use less spaces", function () {
    const actual = calculate("8  - 3");
    const expected = 'Invalid Expression (Please, use less spaces!)';
    assertEquals(actual, expected);
});

test("Use additional spaces", function () {
    const actual = calculate("8- 5");
    const expected = 'Invalid Expression (Please, use additional spaces!)';
    assertEquals(actual, expected);
});

test("Invalid operator", function () {
    const actual = calculate("9 ~ 1");
    const expected = 'Invalid operator! Please, use only "+", "-", "*", "/" or "%"';
    assertEquals(actual, expected);
});

runKUnit();
