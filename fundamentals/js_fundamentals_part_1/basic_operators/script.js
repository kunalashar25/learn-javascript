// An operator allows us to transform values or combine values

// Arithmetic Operators:
const currentYear = 2022;

const ageJonas = currentYear - 1991;
const ageKelvin = currentYear - 1993;
console.log(ageJonas, ageKelvin); // 31 29


console.log(ageJonas * 2, ageJonas / 2, 2 ** 3); // 62 15.5 8
// 2 ** 3 means 2's cube

const firstName = 'Jonas';
const lastName = 'JS';
console.log(firstName + ' ' + lastName); // Jonas JS

// Assignment Operators:
let x = 10 + 5;
console.log(x); // 15

x += 10;
console.log(x); // 25

x *= 4;
console.log(x); // 100

x++;
console.log(x); // 101

x--;
console.log(x); // 100

// Comparison Operators:
// Will produce boolean values
console.log(ageJonas > ageKelvin); // true
console.log(ageKelvin >= 18); // true
console.log(ageJonas < ageKelvin); // false
console.log(ageKelvin <= 18); // false

const canVote = ageKelvin >= 18;
console.log(canVote); // true
