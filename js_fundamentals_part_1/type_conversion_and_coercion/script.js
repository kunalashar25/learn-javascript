//  Type Conversion:
// • When we manually convert from one type to the another.

// Type Coercion:
// • When JS automatically converts the types behind the scene.

// -----------------------------------------------------------------------------------------------------------

// Type Conversion Example:
const inputYear = '1991';
console.log(inputYear + 18); // 199118

// Convert String to Number
console.log(Number(inputYear) + 18); // 2009
// original value is not converted. It's still a string

console.log(Number('hello')); // NaN → Not a Number as invalid string provided. So it is called as Invalid Number
console.log(typeof NaN); // number

// Convert Number to a String
console.log(String(23) + 10); // 2310

// Java Script can only convert few types:
// 1. to a Number
// 2. to a String
// 3. to a Boolean

// -----------------------------------------------------------------------------------------------------------

// Type Coercion Example:
// It happens whenever an operator is dealing with two values of different types.
// JS will convert one value to the other value so operation can be executed (Behind the scene working).

console.log('I Am ' + 23 + ' years old.') // I Am 23 years old.
// Operation between String and a Number → Number will be converted to the String.

console.log('23' - '10' - 3); // 10
// Minus operator triggers the opposite conversion
// In this case, String were converted to Numbers

console.log('23' + '10' + 3); // 23103

console.log('23' * '2'); // 46 String → Number
console.log('23' / '2'); // 11.5 String → Number
console.log('23' > '2'); // true String → Boolean

let n = '1' + 1; // String concat as we're using + operator
n = n - 1; // Convert to number and subtract as we're using - operator
console.log(n); // 10

let x = 2 + 3 + 4 + '5';
console.log(x); // 95