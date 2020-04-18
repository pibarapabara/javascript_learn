let allTests = [];

function test(name, f) {
    allTests.push({
        name: name,
        f: f,
    })
}

function assertEquals(a, b) {
    if (a != b) {
        throw a + " Is not equals. " + b
    }
}

function runKUnit() {
    for (let test of allTests) {
        try {
            test.f()
            console.log("Test: " + test.name + ". Result: OK")
        } catch (e) {
            console.error("Test: " + test.name + ". Result: " + e)
        }
    }
}

module.exports = {
    test: test,
    assertEquals: assertEquals,
    runKUnit: runKUnit,
};
