'use strict';

// Destructuring is an ES6 feature
// It is a way to unpack values from an array or an object into separate variables.
// Break complex data structure into a smaller data structure

const arr = [2, 3, 4];

// Destructuring example
const [a, b, c] = arr;
console.log(a, b, c); // 2 3 4

// Original array is not affected
console.log(arr); // (3) [2, 3, 4]

// ---------------------------------------------------------------------------------------------------------------------------------

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  order: function (fromStarter, fromMain) {
    return [this.starterMenu[fromStarter], this.mainMenu[fromMain]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// keep empty space to not use that value
// order of elements matter in arrays
let [first1, , third] = restaurant.categories;
console.log(first1, third); // Italian Vegetarian

// swapping values with destructurring
[first1, third] = [third, first1];
console.log(first1, third); // Vegetarian Italian

// destructure values returned from the functions
let [starter, main] = restaurant.order(2, 1);
console.log(starter, main); // Garlic Bread Pasta

// destruture nested array
const nested = [2, 4, [1, 3]];
const [i, , [l, m]] = nested;
console.log(i, l, m); // 2 1 3

// default values for variables to avoid undefined
// use this technique when we don't know array length that will be returned
let [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

let [x = 0, y = 0, z = 0] = [8, 9];
console.log(x, y, z); // 8 9 0
