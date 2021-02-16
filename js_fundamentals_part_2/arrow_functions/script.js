// Special form of function expression that is shorter and faster to write

const ageCalc = function (year) {
    return 2021 - year;
}

// Arrow function
// Syntax: const var = parameters => operations to perform (will also return the value implicitly)
const ageCalculator = year => 2021 - year;
console.log(ageCalculator(2001)); // 20

// Arrow function with multiple lines
const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991)); // 35

// Arrow function with multiple parameters
const yearsUntilRetirement2 = (firstName, birthYear) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2('Kelvin', 1991)); // Kelvin retires in 35 years