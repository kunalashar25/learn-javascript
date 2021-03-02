// similar to if else but written in one line
// Also known as ternary operator

// Syntax:
// condition ? if true : if false

const age = 23;
age >= 18 ? console.log('greater') : console.log('less');
// greater

const message = age >= 18 ? 'greater than' : 'less than';
console.log(message); // greater than

// Conditional Operator inside template literal
console.log(`User is ${age >= 18 ? 'greater than' : 'less than'} 18`); // User is greater than 18