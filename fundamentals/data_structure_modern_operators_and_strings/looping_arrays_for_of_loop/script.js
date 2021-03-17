'use strict';

// ---------------------------------------------------------------------------------------------------------------------------------

// Data needed for first part of the section
const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// In ES6 we can compute property name
// In this case we are using property name from weekdays array
// Proeprty name has to be written inside [] brackets
const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enahced object literal. No need to write openingHours: openingHours
	openingHours,

	// ES6 enhanced function writing
	// no need to create a proper and write function like order: function()
	// We can direcly write function inside object
	order(starterIndex, mainIndex) {
		console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
	},
};

console.log(restaurant);
restaurant.order(1, 2); // Bruschetta Risotto
