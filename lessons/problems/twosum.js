const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let lastIndex = nums.length - 1;
    for (let index = 0; index <= lastIndex; index++){
        let number = nums[index];
        for (let index2 = 0; index2 <= lastIndex; index2++) {
            if (index === index2) {
                continue;
            }
            let number2 = nums[index2];
            let sum = number + number2;
            if (target === sum) {
                return [index, index2];
            }
        }
    }
    return nums
};

test("test case 1", function () {
    const actual = twoSum([2, 7, 11, 15], 9);
    const expected = [0, 1];
    assertEquals(actual, expected);
});
test("test case 2", function () {
    const actual = twoSum([8, 4, 6, 3, 14], 20);
    const expected = [2, 4];
    assertEquals(actual, expected);
});
runKUnit();