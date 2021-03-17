'use strict';

// Properties of Logical Operators:
// - They can use any data type
// - They can return any data type
// - They do short circuiting or short circuiting evaluation

// Result of OR operator does not always have to be boolean
console.log(2 || 'Jonas'); // 2

// In case of OR operator, short circuiting means that if the first value (operand) is a truthy value, then it'll immediately return that value.

console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || null); // Hello
// ---------------------------------------------------------------------------------------------------------------------------------

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
	orderPizza: function (mainIngedrients, ...otherIngedrients) {
		console.log('Main Ingedrient for Pizza is ' + mainIngedrients);
		console.log('Optional Ingedrients are ' + otherIngedrients);
	},
};

const guests = restaurant.numberOfGuest ? restaurant.numberOfGuest : 3;
console.log(guests); // 3

const guest2 = restaurant.numberOfGuest || 5;
console.log(guest2); // 5 as restaurant.numberOfGuest does not exist

restaurant.numberOfGuest = 13;
const guest3 = restaurant.numberOfGuest || 5;
console.log(guest3); // 13

// ---------------------------------------------------------------------------------------------------------------------------------
// AND Operator
// evaluation will stop if Falsy value is encountered
console.log(0 && 'Jonas'); // 0

// evaluation will continue for truthy value
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); // null

// call the function if exist in restaurant object
if (restaurant.orderPizza) {
	restaurant.orderPizza('Mushroom', 'Spinach');
}

// Using AND Operator to write above if block
restaurant.orderPizza && restaurant.orderPizza('Cheese');
// Main Ingedrient for Pizza is Cheese
// Optional Ingedrients are
