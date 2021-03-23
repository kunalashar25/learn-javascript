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

	pay: function (a) {
		return 'Payment done for ' + a;
	},
};

// error w/o optional chaining
console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); Uncaught TypeError: Cannot read property 'open' of undefined

// Introduced in ES2020
// If certain property does not exist in an object then undefined is returned immediately
console.log(restaurant.openingHours.mon?.open);
// we get undefined instead of error as dispalyed on line 31
// ?. will check if mon is undefined or not. If mon is undefined then it won't run .open operation

// Multiple Optional chaining
console.log(restaurant?.openingHours?.mon);

const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const d of day) {
	//bracket notation to use varaible name as property name
	const o = restaurant.openingHours[d]?.open ?? 'closed';
	// using coalescing operator as sat open time is 0
	console.log('Opening time: ' + o + ' On ' + d);
}

// Opening time: closed On mon
// Opening time: closed On tue
// Opening time: closed On wed
// Opening time: 12 On thu
// Opening time: 11 On fri
// Opening time: 0 On sat
// Opening time: closed On sun

// Optional chaining on Methods
console.log(restaurant.order?.() ?? 'Method does not exist');
// Method does not exist

console.log(restaurant.pay?.(5) ?? 'Pay Method does not exist');
// Payment done for 5

// Optional Chaining on Arrays
const user = [{ name: 'n1', age: 29 }];
console.log(user[0]?.name ?? 'User array is empty'); // n1
console.log(user[1]?.name ?? 'User array is empty'); // User array is empty
