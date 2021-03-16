'use strict';

// Spread Operator is used to expand an array into all its elements
const arr = [7, 8, 9];

// to add new values at the start - Bad Practice
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray); // (5) [1, 2, 7, 8, 9]

// This will create nested array and not array will 5 elements
const badArray2 = [1, 2, arr];
console.log(badArray2); // (3) [1, 2, Array(3)]

// spread operator
const goodArray = [1, 2, ...arr];
console.log(goodArray); // (5) [1, 2, 7, 8, 9]

// to log individual value for the array
console.log(...goodArray); // 1 2 7 8 9

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta Ingedrients ${ing1},${ing2},${ing3}`);
  },
};

// creating new menu with new items and including old ones as well
const newMenu = [...restaurant.mainMenu, 'Burrito'];
console.log(newMenu); // (4) ["Pizza", "Pasta", "Risotto", "Burrito"]

// Spread Operator takes all the elements from the array and does not create new varaibles.
// We can only use it in a place where we would write values separated by commas

// Shallow copy of mainMenu
// Same as Object.assign()
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // (3) ["Pizza", "Pasta", "Risotto"]

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); // (7) ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Spread operator works on all Iterables
// Example: Arrays, Strings, Set, Maps
// Objects are not Iterables

// Spread Operator on String
const name = 'jonas';
const letters = [...name, '', 'o'];
console.log(letters); // (7) ["j", "o", "n", "a", "s", "", "o"]

// Spread Operator can be using while building an array or passing values to the functions
// We cannot use spread operator with template literal

restaurant.orderPasta('a', 'b', 'c'); // Pasta Ingedrients a,b,c

const ingedrients = ['macroni', 'bell pepper', 'cream'];
restaurant.orderPasta(...ingedrients); // Pasta Ingedrients macroni,bell pepper,cream

// From ES2018 - Spread Operator also works on Objects
const newRestaurant = { owner: 'Kelvin Thomas', ...restaurant };
console.log(newRestaurant);
// {owner: "Kelvin Thomas", name: "Classico Italiano", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(4), starterMenu: Array(4), …}

// Copy of Object
// Can be used instead of Object.assign()
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Kelvin';
console.log(restaurantCopy.name, restaurant.name); // Kelvin Classico Italiano
