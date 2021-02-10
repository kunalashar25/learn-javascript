const age = 14;
const requiredAge = 18;

const isOldEnough = age >= requiredAge;
const underAgeMessge = `Need to wait for ${requiredAge - age} more years!`;

if (isOldEnough) {
    console.log('Can get a license'); // Can get a license
} else {
    console.log(underAgeMessge); // Need to wait for 4 more years!
}

// Example 2
const birthYear = 1991;

// conditionally assigning values
let century;

// find century of the person
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Person is born in ${century} centure.`) // Person is born in 20 centure.