const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");
/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
//    return address.split(".").join('[.]');
    return address.replace(/\./g,"[.]");
};

test("test case 1", function (){
    const actual = defangIPaddr("1.1.1.1");
    const expected = "1[.]1[.]1[.]1";
    assertEquals(actual, expected);
});

test("test case 2", function (){
    const actual = defangIPaddr("255.100.50.0");
    const expected = "255[.]100[.]50[.]0";
    assertEquals(actual, expected);
});

runKUnit()