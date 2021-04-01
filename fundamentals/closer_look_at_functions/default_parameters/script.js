'use strict';

const bookings = [];

// some parameters are set by default
const createBooking = function (
	flightNumber,
	numOfPassangers = 1,
	price = 50 * numOfPassangers // can also contains expression using parameters that are defined in the list before using them.
) {
	// defaulting value before ES6
	// numOfPassangers = numOfPassangers || 1;
	// price = price || '50$';

	// ES6 offers better way as displayed above

	const booking = {
		flightNumber, // will create property and assign values as well
		numOfPassangers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking(1, 2, 3); // {flightNumber: 1, numOfPassangers: 2, price: 3}
createBooking('AI123'); // {flightNumber: "AI123", numOfPassangers: 1, price: "50$"}
createBooking('AI345', 20); // {flightNumber: "AI345", numOfPassangers: 20, price: 50}
createBooking('PQ123', 5, 650); // {flightNumber: "PQ123", numOfPassangers: 5, price: 650}
createBooking('SG347', 8); // {flightNumber: "SG347", numOfPassangers: 8, price: 400}

createBooking('SG347', 8); // Cannot skip arguments.

// skipping default parameter
createBooking('SG347', undefined, 8); // {flightNumber: "SG347", numOfPassangers: 1, price: 8}
