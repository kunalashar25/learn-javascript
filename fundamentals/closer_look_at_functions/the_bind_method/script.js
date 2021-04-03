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

const newAir = {
	airline: 'NewAir',
	iataCode: 'NA',
	bookings: [],
};

const book = lufthansa.book;

// bind also allows us to manually set this keyword just like call method
// Difference is bind does not immediately call the function
// instead it returns a new function where this keyword is bound
const bookNA = book.bind(newAir);

// no need to specify this keyword as we're using bind method
bookNA(456, 'Steven'); // Steven booked a seat on NewAir flight NA456
console.log(newAir); // {airline: "NewAir", iataCode: "NA", bookings: Array(1)}

// binding airline with flight number by passing parameter during bind call. Same as call method
const bookNA_123 = book.bind(newAir, 123);
bookNA_123('Ali'); // Ali booked a seat on NewAir flight NA123
console.log(newAir); // {airline: "NewAir", iataCode: "NA", bookings: Array(2)}

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

// increase plane count when button is clicked
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane()); OR
document
	.querySelector('.buy')
	.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// It means that we can preset parameters
// We might not require this keyword but still need to call bind method

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// presetting VAT to 23%
const addVAT = addTax.bind(null, 0.23);
// keeping first parameter as null as there is no this keyword in the function and we are presetting default tax rate for VAT
console.log(addVAT(100)); // 123

// same Tax example with function returning functions
const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

console.log(addTaxRate(0.23)(100)); // 123
