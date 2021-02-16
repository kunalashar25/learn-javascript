// function declaration → when we use function keyword alongwith function name
function ageCalculator(year) {
    return 2021 - year;
}

console.log(ageCalculator(1995)); // 26

// we can call function declaration before they're defined in the code


// We cannot call function expression before they're defined. We'll get below error
// Uncaught ReferenceError: Cannot access 'ageCalc' before initialization
console.log(ageCalc(1991));

// Function expression → Storing function as a variable w/o using function name
const ageCalc = function (year) {
    return 2021 - year;
}

console.log(ageCalc(1991)); // 30

