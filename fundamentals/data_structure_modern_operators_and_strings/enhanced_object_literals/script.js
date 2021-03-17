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
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// will print each element present in the array
for (const items of menu) console.log(items);
// Focaccia
// Bruschetta
// and so on....

// continue and break can be used for this loop
// for-of loop is not designed to get index but can be done in other way

for (const item of menu.entries()) {
	console.log(item);
}
// (2) [0, "Focaccia"]
// (2) [1, "Bruschetta"]
// and so on...

for (const item2 of menu.entries()) {
	console.log(`${item2[0] + 1}: ${item2[1]}`);
}
// 1: Focaccia
// 2: Bruschetta
// and so on...

// Destructuring item in for loop
for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
}
// 1: Focaccia
// 2: Bruschetta
// and so on...
