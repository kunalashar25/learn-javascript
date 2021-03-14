'use strict';

var firstName = 'Kelvin'; // var creates property in global object i.e. window object

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object {year: 1991, calcAge: ƒ}
    console.log(2021 - this.year); // 30
  },
  greet: () => console.log(`Hey ${this.firstName}`), // greet is present in global scope. Arrow function will use this from global scope

  greet2: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet(); // Hey Kelvin
// this printed Kelvin as arrow function does not have their own this keyword. Hence, It is fecthing firstName from the global object which is created using var.

console.log(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// never use arrow funtion as a method

jonas.greet2(); // Hey Jonas

// ---------------------------------------------------------------------------------------------------------------------------------

// A regular function call sets this to undefined
const kelvin = {
  firstName: 'Kelvin',
  year: 1991,
  calcAge: function () {
    console.log(this); // {firstName: "Kelvin", year: 1991, calcAge: ƒ}
    console.log(2021 - this.year); // 30

    // regular function uses their own this keyowrd
    const isMillenial = function () {
      console.log(this); // undefined
    };
    isMillenial(); // regular function call w/o object reference
  },
};

kelvin.calcAge();

// Solution 1: store this in some constant before function call (pre ES6 Solution)
const kelvin2 = {
  firstName: 'Kelvin2',
  year: 1991,
  calcAge: function () {
    console.log(this); // {firstName: "Kelvin2", year: 1991, calcAge: ƒ}
    console.log(2021 - this.year); // 30

    const self = this; // storing this in another constant so we can use it inside regular functions
    const isMillenial = function () {
      console.log(self); // {firstName: "Kelvin2", year: 1991, calcAge: ƒ}
      console.log(self.firstName); // Kelvin2
    };
    isMillenial(); // regular function call w/o object reference
  },
};

kelvin2.calcAge();

// Solution 2: Modern Solution with ES6 - using arrow function
const kelvin3 = {
  firstName: 'Kelvin3',
  year: 1991,
  calcAge: function () {
    console.log(this); // {firstName: "Kelvin3", year: 1991, calcAge: ƒ}
    console.log(2021 - this.year); // 30

    // arrow funtion will use this keyoword of the parent scope
    const isMillenial = () => {
      console.log(this); // {firstName: "Kelvin3", year: 1991, calcAge: ƒ}
      console.log(this.firstName); // Kelvin3
    };
    isMillenial(); // arrow function call w/o object reference
  },
};

kelvin3.calcAge();

// ---------------------------------------------------------------------------------------------------------------------------------

// ARGUMENTS KEYWORDS (Good to know - Not Required)
// Only available in regular functions

const addNum = function (a, b) {
  console.log(arguments);
  return a + b;
};

addNum(2, 5); // Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
addNum(2, 5, 7, 9); // Arguments(4) [2, 5, 7, 9, callee: (...), Symbol(Symbol.iterator): ƒ]

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5); // Uncaught ReferenceError: arguments is not defined
