const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let integer = x;
    if (x < 0) {
        integer = Math.abs(x);
    }
    let string = String(integer);

    let array = string.split("");
    if (x < 0) {
        array.push('-');
    }

    array.reverse();
    // console.log(reversed);

    let arrayToString = array.join("");
    // console.log (arrayToString)

    arrayToString = Number(arrayToString);
    // console.log (arrayToString);

    // if (x < 0) {
    //     arrayToString = -arrayToString;
    // }
    return arrayToString;
}


test("reverse 1", function () {
    const actual = reverse(123);
    const expected = 321;
    assertEquals(actual, expected);
});
test("reverse 2", function () {
    const actual = reverse(-123);
    const expected = -321;
    assertEquals(actual, expected);
});
test("reverse 3", function () {
    const actual = reverse(120);
    const expected = 21;
    assertEquals(actual, expected);
});

runKUnit();