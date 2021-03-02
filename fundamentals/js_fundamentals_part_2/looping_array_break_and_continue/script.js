const jonas = [
    'Jonas',
    'Test',
    2021 - 1991,
    'teacher',
    ['Michael', 'Kelvin', 'Peter']
];

// to store typeOf values present in jonas array
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
// Jonas string
// Test string
// 30 "number"
// teacher string
// (3) ["Michael", "Kelvin", "Peter"] "object"

console.log(types); // (5) ["string", "string", "number", "string", "object"]

const year = [1991, 2003, 2005, 2019];
const ages = [];

for (let i = 0; i < year.length; i++) {
    ages.push(2021 - year[i]);
}

console.log(ages); // (4) [30, 18, 16, 2]

// Continue Statement
//  exit the current interation of the loop and continue to the next one
console.log('Continue statement to print only strings')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}
// Continue statement to print only strings
// Jonas string
// Test string
// teacher string


// Break Statement
// teminate the whole loop
console.log('Break statement after a number is found')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
// Break statement after a number is found
// Jonas string
// Test string