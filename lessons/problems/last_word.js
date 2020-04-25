const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    let array = s.trim().split(" ");
    return array[array.length - 1].length;
}
test("last word", function (){
    const actual = lengthOfLastWord("Hello World");
    const expected = 5;
    assertEquals(actual, expected);
});
test("doesnt have last word", function (){
    const actual = lengthOfLastWord("");
    const expected = 0;
    assertEquals(actual, expected);
});
test("first word", function (){
    const actual = lengthOfLastWord("Hi planet");
    const expected = 6;
    assertEquals(actual, expected);
});

test("hello honey string", function (){
    const actual = lengthOfLastWord("hello honey ");
    const expected = 5;
    assertEquals(actual, expected);
});

test("test", function (){
    const actual = lengthOfLastWord("    ");
    const expected = 0;
    assertEquals(actual, expected);
});
runKUnit()