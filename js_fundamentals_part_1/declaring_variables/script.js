// There are 3 ways to declare a variable

// var:
// 1. old way of declaring, prior to ES6
var firstName = 'Jonan';
firstName = 'Kelvin'

// ------------------------------------------------------------------------------

// let:
// 1. Introduced ES6
// 2. varaible value can change later

let age = 30;
age = 32; // mutate/mutated age variable

// 3. Can declare empty let variable
let year;
year = 1991;

// ------------------------------------------------------------------------------

// const:
// 1. Introduced ES6
// 2. varaible value cannot be changed, Immutable variable.
const birthYear = 1991;
birthYear = 1990; // Uncaught TypeError: Assignment to constant variable.

// 3. Cannot declare empty const variable
const job; // Uncaught SyntaxError: Missing initializer in const declaration

// ------------------------------------------------------------------------------

// Good Practice
// 1. By default always use const
// 2. Keep less mutation
// 3. var should be completely avoided