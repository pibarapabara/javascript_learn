const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
    let jewels = J.split("");
    let stones = S.split("");
    let foundedJewels = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                foundedJewels++;
            }
        }
    }
    return foundedJewels;
}

test("Jewels and Stones 1", function () {
    const actual = numJewelsInStones(J = "aA", S = "aAAbbbb");
    const expected = 3;
    assertEquals(actual, expected);
});
test("Jewels and Stones 2", function () {
    const actual = numJewelsInStones(J = "z", S = "ZZ");
    const expected = 0;
    assertEquals(actual, expected);
});
runKUnit();