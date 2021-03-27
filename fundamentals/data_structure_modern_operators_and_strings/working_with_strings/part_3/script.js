'use strict';

const airline = 'Air Portugal';
const plane = 'A320';

// split
console.log('a+very+good'.split('+')); // (3) ["a", "very", "good"]

const [firstname, lastname] = 'Kelvin Thomas'.split(' ');
console.log(firstname, lastname.toUpperCase()); // Kelvin THOMAS

// join method is from array
// it will join all the elements and create one string.
const formattedName = ['Mr.', firstname, lastname.toUpperCase()].join('_');
console.log(formattedName); // Mr._Kelvin_THOMAS

// padding a string
const message = 'Go to gate 23';
console.log(message.padStart(20, '+')); // +++++++Go to gate 23
console.log(message.padEnd(20, '+')); // Go to gate 23+++++++
console.log(message.padStart(20, '+').padEnd(30, '-')); // +++++++Go to gate 23----------

// mask credit card number
const maskCardNumber = function (number) {
	const num = number + '';
	console.log(num.slice(-4).padStart(16, '•'));
};

maskCardNumber(3265988754213265); // ••••••••••••3265

// repeat
const msg = 'Bad weather... All departures delayed...';
console.log(msg.repeat(3));
// Bad weather... All departures delayed...Bad weather... All departures delayed...Bad weather... All departures delayed...

const planeInLine = function (n) {
	console.log(`There are ${n} plane in line ${'✈️'.repeat(n)}`);
};
planeInLine(5); // There are 5 plane in line ✈️✈️✈️✈️✈️
