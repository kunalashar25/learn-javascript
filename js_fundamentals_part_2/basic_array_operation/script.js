const friends = ['John', 'Kelvin', 'Peter'];

// push → adds element to the end of the array
// ◦ returns length of the array
const newLength = friends.push('Jake');
console.log(friends); // (4) ["John", "Kelvin", "Peter", "Jake"]
console.log(newLength); // 4

// unshift → adds element to the beginning of the array
friends.unshift('Charlie');
console.log(friends); // (5) ["Charlie", "John", "Kelvin", "Peter", "Jake"]

// pop → remove last element from the array
// ◦ opposite of push. Removes last element of the array
// ◦ returns the removed element
const removedElement = friends.pop();
console.log(friends); // (4) ["Charlie", "John", "Kelvin", "Peter"]
console.log(removedElement); // Jake

// pop → remove first element from the array
// ◦ returns the removed element
friends.shift();
console.log(friends); // (3) ["John", "Kelvin", "Peter"]

// indexOf → element position in the array
console.log(friends.indexOf('Kelvin')); // 1

// returns -1 for element not present in the array
console.log(friends.indexOf('Bob')); // -1

// includes → checks if element present in the array
// ◦ uses strict equality
console.log(friends.includes('Bob')); // false
console.log(friends.includes('Kelvin')); // true

// uses strict equality
friends.push(23);
console.log(friends.includes(23)); // true
console.log(friends.includes('23')); // false