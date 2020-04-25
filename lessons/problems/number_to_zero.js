const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
    let steps = 0;
    for (let i = num; i > 0;) {
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = i - 1;
        }
        steps += 1;
    }
    return steps;
}


/*
1. Если число чётное, то делим на 2;
2. Если число нечётное, то -1
3. Нужно считать количество действий, пока результат не будет = 0;
 */
test("example 1", function () {
    const actual = numberOfSteps(14);
    const expected = 6;
    assertEquals(actual, expected);
});
test("example 2", function () {
    const actual = numberOfSteps(8);
    const expected = 4;
    assertEquals(actual, expected);
});
runKUnit();