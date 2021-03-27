'use strict';
// ---------------------------------------------------------------------------------------------------------------------------------

const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'Air Portugal';
const plane = 'A320';

// get string character from position
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

// length of a string
console.log(airline.length); // 12
console.log('B737'.length); // 4

// indexOf method
// first occurring index
console.log(airline.indexOf('r')); // 2
console.log(airline.indexOf('l')); // 11

// lastIndexOf
console.log(airline.lastIndexOf('r')); // 6

// search for entire word
// it is case sensitive
console.log(airline.indexOf('ugal')); // 8

// Indexes are used in slice methods
// starting index to split
// creates a new sub string
// does not update original string
// strings are immutable
// slice methods return a new string
console.log(airline.slice(4)); // Portugal
console.log(airline.slice(4, 7)); // Por

console.log(airline.slice(airline.indexOf(' '))); //  Portugal
console.log(airline.slice(0, airline.indexOf(' '))); // Air

// extracting from the end of the string
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -2)); // ir Portug

const checkMiddleSeat = function (seat) {
	// B and E are middle seats
	const letter = seat.slice(-1);
	if (letter === 'B' || letter === 'E') console.log('You got middle seat');
	else console.log('You got lucky');
};
checkMiddleSeat('11B'); // You got middle seat
checkMiddleSeat('23C'); // You got lucky
checkMiddleSeat('3E'); // You got middle seat

// whenever we call a method on a string, JS will internaly convert string primitive into string object with same content
// and methods are called on that object. This concept is called boxing.
console.log(typeof airline); // string
console.log(typeof new String('Silk Air')); // object
