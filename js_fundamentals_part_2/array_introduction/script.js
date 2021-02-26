// To store 3 friends name
const friend1 = 'John';
const friend2 = 'Kelvin';
const friend3 = 'Peter';

// Two most important data structure in Javascript:
// ◦ Arrays
// ◦ Objects

// literal syntax
const friends = ['John', 'Kelvin', 'Peter'];
console.log(friends); // (3) ["John", "Kelvin", "Peter"]

// object syntax
const years = new Array(1991, 2003, 2021);
console.log(years); // (3) [1991, 2003, 2021]

// printing
console.log(friends[0]); // John
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

// update value
friends[1] = 'Thomas';
console.log(friends); // (3) ["John", "Thomas", "Peter"]

// only primitive values are immutable when we declare them as const
// Array is not primitive, hence we can update the element value inside an array

// friends = ['Cannot', 'Assign', 'This', 'way']; Uncaught TypeError: Assignment to constant variable.
// friends is already constant so we cannot assign new values this way

// values with different types
const user = ['FName', 'LName', 2021 - 1991, friends];
console.log(user); // (4) ["FName", "LName", 30, Array(3)]

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]);
console.log(age1); // 30

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages); // (3) [30, 18, 0]
