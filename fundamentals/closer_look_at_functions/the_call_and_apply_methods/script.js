'use strict';

const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ fligh: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(123, 'Jonas'); // Jonas booked a seat on Lufthansa flight LH123
lufthansa.book(678, 'John'); // John booked a seat on Lufthansa flight LH678
console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(2), book: ƒ}

// new airlines created by Lufthansa group
const newAir = {
	airline: 'NewAir',
	iataCode: 'NA',
	bookings: [],
};

const book = lufthansa.book;
// below call with throw error as book is just a normal function now.
// this keyword is undefined in normal function.
// book(456, 'Williams'); Uncaught TypeError: Cannot read property 'airline' of undefined

// call method is used to decide where this keyword will point
// explicitly setting this keyword of any method we call.
book.call(newAir, 456, 'Williams');
console.log(newAir);
// Williams booked a seat on NewAir flight NA456
// {airline: "NewAir", iataCode: "NA", bookings: Array(1)}

book.call(lufthansa, 239, 'Kelvin'); // Kelvin booked a seat on Lufthansa flight LH239
console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(3), book: ƒ}

// Apply method does the same thing.
// It does not take list of arguments after this keyword like call method
// It takes array of data
const flightData = [583, 'George'];
book.apply(newAir, flightData);

console.log(newAir);
// George booked a seat on NewAir flight NA583
// {airline: "NewAir", iataCode: "NA", bookings: Array(2)}

// Apply method is not used anymore with modern javascript.
// with modern JS, we can use spread operator with call method
book.call(newAir, ...flightData);
console.log(newAir);
// George booked a seat on NewAir flight NA583
// {airline: "NewAir", iataCode: "NA", bookings: Array(3)}
