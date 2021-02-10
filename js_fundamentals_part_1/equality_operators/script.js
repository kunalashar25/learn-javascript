// Two types of equality operators
// == → Loose equality operator. It does type coercion
// === → Strict equality operator. Does not perform type coercion. Returns true if both values are exactly the same
//, !== → Not equal, loose version

const age = 18;

// to verify age is exactly 18
if (age === 18)
    console.log('Exactly 18'); // Exactly 18

// This will always return false as both values are of different types
if (age === '18')
    console.log('strict')
else
    console.log('strict operator. Will not work with different types of values') // strict operator. Will not work with different types of values

// loose operator
if (age == '18')
    console.log('Exactly 18 with coercion'); // Exactly 18 with coercion

// will generate user pop-up
const num = prompt('Your favourite number?');
console.log(num);
console.log(typeof num); // string

if (num == 23)
    console.log('23 is your number!');
else if (num !== 23)
    console.log('apart from 23');

if (num === 23)
    console.log('23 is your number!'); // no output as comparing different types

// wrapping prompt with number so string will be converted to number before assigning it to the num1
const num1 = Number(prompt('Your favourite number?'));
console.log(typeof num1); // number

if (num1 === 23)
    console.log('23 is your number!');

// if else ladder
if (num1 === 7)
    console.log('Number is 7!');
else if (num1 === 15)
    console.log('Number is 15!');

// Good Practice
// 1. Always use strict comparison while comparing values