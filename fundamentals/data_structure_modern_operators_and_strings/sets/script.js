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

// Set was introduced in ES6
// Collection of Unique values
// Cannot have duplicate values
// Set can hold mixed data type
// Set are also iterable

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);
console.log(orderSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

// check size
console.log(orderSet.size); // 3
// array contains length for the the same

// element present in set
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
// array contains include() method for the same

// Add elements to the set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet); // Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}

// remove element from set
orderSet.delete('Pasta');
console.log(orderSet); // Set(3) {"Pizza", "Risotto", "Garlic Bread"}

// No indexes in set

// remove all elements from the set
// orderSet.clear();
console.log(orderSet); // Set(0) {}

// Iterate on Set
for (const order of orderSet) console.log(order);

// Remove duplicates from array
const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef'];
const hotelStaff = new Set(staff);
console.log(hotelStaff); // Set(3) {"Waiter", "Chef", "Manager"}

// Converting set to array using Spread Operator
// Spread Operator can be applied to any Iterable
const hotelStaff2 = [...new Set(staff)];
console.log(hotelStaff2); // (3) ["Waiter", "Chef", "Manager"]
