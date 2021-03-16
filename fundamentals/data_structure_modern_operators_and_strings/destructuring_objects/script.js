'use strict';

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

  // destructuring object into varaibles on function calling and also adding default values
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '10.30 am',
    address = 'Ooty',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    );
  },
};

// use {} to destructure objects
// Provide variable names that exactly match the properties name
// order of element does not matter in Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// using different varaible names than properties name
const {
  name: restaurantName,
  openingHours: time,
  categories: tags,
} = restaurant;

console.log(restaurantName, time, tags);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// default values + different names
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Mutating variables
let a = 111;
let b = 222;
console.log(a, b); // 111 222

const obj = { a: 15, b: 16, c: 17 };
// {a,b} = obj; cannot write it this way as when we start anything with {, js is expecting a code block.
// since we cannot assign anything to a code block, this line will throw an error
// Solution to overcome this is to wrap everything inside ()

({ a, b } = obj);
console.log(a, b); // 15 16

// Nested Objects
// store open/close hours from opening hours

const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

// assigning new names
const {
  sat: { open: startTime, close: endTime },
} = openingHours;
console.log(startTime, endTime); // 0 24

// destructuring object into varaibles on function calling
// check orderDelivery function
restaurant.orderDelivery({
  time: '22.30',
  address: 'Himachal',
  mainIndex: 1,
  starterIndex: 0,
});
// Order Received! Focaccia and Pasta will be delivered at Himachal at 22.30

// default values will be used when properties are not provided
restaurant.orderDelivery({
  address: 'Punjab',
  starterIndex: 2,
});
// Order Received! Garlic Bread and Pizza will be delivered at Punjab at 10.30 am
