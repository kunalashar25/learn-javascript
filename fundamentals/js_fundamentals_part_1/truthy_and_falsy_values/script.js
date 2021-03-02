// Falsy values are values that are not exactly false but will become false when we try to convert them in a boolean

// Five Flasy values:
// 1. 0
// 2. ''
// 3. undefined
// 4. null
// 5 NaN

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// with empty object
console.log(Boolean({})); // true

//  any string that is not an empty string is a truthy value
console.log(Boolean('test')); // true

// Type coercion in Boolean happens in 2 scenarios:
// 1. Logical Operators
// 2. Logical Conditions

// const money = 0; // Output: No Money left
const money = 20; // Don't spend it all
if (money) {
    console.log(`Don't spend it all`);
} else
    console.log('No Money left');


let height // Undefined Height
if (height)
    console.log('Height defined');
else
    console.log('Undefined Height');