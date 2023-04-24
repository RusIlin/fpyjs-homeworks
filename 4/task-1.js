function getPasswordChecker(expected) {
    return function (actual) {
        if (actual === expected) {
            return true;
        }
        return false;
    }
}


function test(checker, actualPass, expected) {
    if (checker(actualPass) !== expected) {
        throw Error("test failed");
    }
}


function main() {
    let checker = getPasswordChecker("123456");
    test(checker, "123456", true);
    test(checker, "pass", false);
    console.log("tests successful")
}

main();
