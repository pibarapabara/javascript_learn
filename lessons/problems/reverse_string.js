const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    return s.reverse();
}


test("Hello reverse", function () {
    const actual = reverseString(["h", "e", "l", "l", "o"]);
    const expected = ["o", "l", "l", "e", "h"];
    assertEquals(actual, expected);
});
test("Hannah reverse", function () {
    const actual = reverseString(["H", "a", "n", "n", "a", "h"]);
    const expected = ["h", "a", "n", "n", "a", "H"];
    assertEquals(actual, expected);
});
runKUnit();