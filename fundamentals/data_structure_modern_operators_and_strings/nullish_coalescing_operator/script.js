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
	orderPizza: function (mainIngedrients, ...otherIngedrients) {
		console.log('Main Ingedrient for Pizza is ' + mainIngedrients);
		console.log('Optional Ingedrients are ' + otherIngedrients);
	},
};

// Operator introduced in ES2020
// This operator works with the concept of nullish values instead of falsy values
// Nullish Values: null and undefined
// This operator treats 0 and '' as truthy values
restaurant.numGuests = 0;

console.log(restaurant.numGuests || 10); // 10

console.log(restaurant.numGuests ?? 10); // 0

console.log(null ?? 10); // 10
