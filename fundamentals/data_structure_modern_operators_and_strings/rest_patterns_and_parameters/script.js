'use strict';

// Rest Patterns looks exactly like Spread Operator but does the opposite
// It collects multiple elements and converts them into an array
// Rest syntax is on the left side of the assignment operator (=)
// It is called rest as it collects rest of the elements and club it together
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

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

// Rest pattern must be the last element
// There should be only one rest element
const [p, , r, ...otherFood] = [
	...restaurant.starterMenu,
	...restaurant.mainMenu,
];
console.log(p, r, otherFood); // Focaccia Garlic Bread (4) ["Caprese Salad", "Pizza", "Pasta", "Risotto"]

// Rest pattern with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // {open: 0, close: 24} {thu: {…}, fri: {…}}

// passing arguments to the functions using rest patterns
// It is called Rest Parameters
const add = function (...numbers) {
	console.log(numbers);
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log('Sum is ' + sum);
};
add(2, 3); // (2) [2, 3]
// Sum is 5

add(5, 7, 9); // (3) [5, 7, 9]
// Sum is 21

const arr = [2, 6, 9];
add(...arr); // (3) [2, 6, 9]
// Sum is 17

// order pizza in restaurant
restaurant.orderPizza('Mushroom');
// Main Ingedrient for Pizza is Mushroom
// Optional Ingedrients are

restaurant.orderPizza('Peproni', 'Cheese');
// Main Ingedrient for Pizza is Peproni
// Optional Ingedrients are Cheese

restaurant.orderPizza('Basil', 'Chese', 'Bell Pepper');
// Main Ingedrient for Pizza is Basil
// Optional Ingedrients are Chese,Bell Pepper
