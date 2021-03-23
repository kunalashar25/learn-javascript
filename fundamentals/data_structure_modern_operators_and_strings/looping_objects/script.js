'use strict';

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
};

// Loop Over Object Properties Name
// Also called Keys

// Object.keys will return object keys as array
const properties = Object.keys(restaurant.openingHours);
console.log(properties); // (3) ["thu", "fri", "sat"]

for (const day of properties) {
	console.log(day);
}
// thu
// fri
// sat

// ---------------------------------------------------------------------------------------------------------------------------------

// Loop Over Object Properties Values

const values = Object.values(restaurant.openingHours);
console.log(values); // (3) [{…}, {…}, {…}]

for (const val of values) {
	console.log(val);
}
// {open: 12, close: 22}
// {open: 11, close: 23}
// {open: 0, close: 24}

// ---------------------------------------------------------------------------------------------------------------------------------

// Loop Over Object Entries
// Entires = name + values
// entires return the index number and element itself

const entries = Object.entries(restaurant.openingHours);
console.log(entries); // (3) [Array(2), Array(2), Array(2)]

for (const e of entries) {
	console.log(e);
}
// (2) ["thu", {…}]
// (2) ["fri", {…}]
// (2) ["sat", {…}]

// destructring entires and printing it on console
for (const [key, { open, close }] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24
