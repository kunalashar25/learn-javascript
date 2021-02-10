const firstName = 'John';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2021;

const message = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(message); // I'm John, a 30 years old teacher!

// We need to make sure we add correct space while writing such a message to display it properly
// To overcome this, we can use template literal
// In Template Literal, we can write everything as a single string and then replace the values using variables.
// `` used while writing template literals

const templateLiteral = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(templateLiteral); // I'm John, a 30 years old teacher!

console.log(`Just a regular string...`); // Just a regular string...

// We can write multi-line string using template literal

console.log('String with \n\
multiple \n\
lines');

/*String with 
multiple 
lines*/

console.log(`String
with
multi line`);

/*String
with
multi line*/