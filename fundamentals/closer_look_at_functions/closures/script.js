'use strict';

// closure is not a feature. We do not create it manually
// It happens automatically in certain situations. We just need to recognize those situations

// creating an example to demonstrate same
const secureBooking = function () {
	// won't be accessed outside the function
	let paxCount = 0;

	return function () {
		paxCount++;
		console.log(`Pax Count: ${paxCount}`);
	};
};

const booker = secureBooking();
booker(); // Pax Count: 1
booker(); // Pax Count: 2

// A closure makes a function remembers all the varaibles that existed at the functions's birthplace
// A function always has access to the varaible environments of the execution context on which it was created, even after that execution context is gone.
// Closure is basically a variable environment attached to a function
//  Scope chain is preserved through closure even when a scope has already been destroyed
// Refer /concept_images/closer_look_at_functions/closure.png

console.dir(booker); // to check function info in browser
// [[]] in console means internally property that we cannot access from our code.
