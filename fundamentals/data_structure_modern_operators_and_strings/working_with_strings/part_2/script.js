'use strict';

const airline = 'Air Portugal';
const plane = 'A320';

// change case
console.log(airline.toLowerCase()); // air portugal
console.log(airline.toUpperCase()); // AIR PORTUGAL
console.log('Test'.toUpperCase()); // TEST

// trim whitespace
const email = 'kelvin@gmail.com';
const loginEmail = '   Kelvin@GMAIL.COM \n';

console.log(email.toLowerCase() === loginEmail.toLowerCase().trim()); // true

// to replace part of string
const priceSG = '265,69$';
const priceINR = priceSG.replace('$', 'INR').replace(',', '.');
console.log(priceINR); // 265.69INR

// replace with regex
const boarding =
	'You can board your flight at door 67 and reach your door 30mins before boarding time';

// for regex, need to write string between // and not ''.
// add g flag at the end of regex. it means global
// replace method is also case sensitive same like other string methods
console.log(boarding.replace(/door/g, 'gate'));
// You can board your flight at gate 67 and reach your gate 30mins before boarding time

// String Booleans
const plane2 = 'A328neo';
console.log(plane2.includes('A328')); // true
console.log(plane2.includes('boeing')); // false

console.log(plane2.startsWith('A')); // true
console.log(plane2.startsWith('Z3')); // false

console.log(plane2.endsWith('8neo')); // true
console.log(plane2.endsWith('neol')); // false

// practice exercise
const checkBaggage = function (items) {
	const baggage = items.toLowerCase();

	if (
		baggage.includes('knife') ||
		baggage.includes('gun') ||
		baggage.includes('bomg')
	)
		console.log('CANNOT Travel');
	else console.log('Welcome Aboard');
};

checkBaggage('laptop, food, Knife'); // CANNOT Travel
checkBaggage('camera, powerbank'); // Welcome Aboard
checkBaggage('guN, BoMB, Child'); // CANNOT Travel
