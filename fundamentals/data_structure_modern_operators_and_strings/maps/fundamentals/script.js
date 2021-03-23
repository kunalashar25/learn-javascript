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

// Map introduces in ES6
// Map keys with value in pair
// In Map, keys can have any type but in Objects keys are always strings

const restaurantMap = new Map();
console.log(restaurantMap); // Map(0) {}

// add value to map
restaurantMap.set('name', 'Italiano');
restaurantMap.set('1', 'Italy');
console.log(restaurantMap); // Map(2) {"name" => "Italiano", "1" => "Italy"}

// set method also returns entire map object
console.log(restaurantMap.set('2', 'Portugal')); // Map(3) {"name" => "Italiano", "1" => "Italy", "2" => "Portugal"}

// can chain set() methods and it returns entire map
restaurantMap
	.set('categories', restaurant.categories)
	.set('open', restaurant.openingHours.fri.open);
console.log(restaurantMap); // Map(5) {"name" => "Italiano", "1" => "Italy", "2" => "Portugal", "categories" => Array(4), "open" => 11}

// reading data from map
console.log(restaurantMap.get('categories')); // (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// Invalid key will be returned as undefined
console.log(restaurantMap.get('abc')); // undefined

// map contains key
console.log(restaurantMap.has('categories')); // true
console.log(restaurantMap.has('categ')); // false

// Remove values from the Map
console.log(restaurantMap.delete('2')); // true -> successful delete
console.log(restaurantMap); // Map(4) {"name" => "Italiano", "1" => "Italy", "categories" => Array(4), "open" => 11}

// size of map
console.log(restaurantMap.size); // 4

// remove all data from map
// restaurantMap.clear();
console.log(restaurantMap); // Map(0) {}

// using array as key
const arr = [1, 2];
restaurantMap.set(arr, 'array');
console.log(restaurantMap); // Map(5) {"name" => "Italiano", "1" => "Italy", "categories" => Array(4), "open" => 11, Array(2) => "array"}

// get data from map with array as key
console.log(restaurantMap.get(arr)); // array

// We can use objects are map keys
restaurantMap.set(document.querySelector('h1'), 'Heading');
console.log(restaurantMap);
