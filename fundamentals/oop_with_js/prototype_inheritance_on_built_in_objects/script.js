'use strict';

// Prototypes
// Each and every function in JS has a property called prototype
// It includes constructor function as well.
// Every object that is created by Constructor Function will get access to all methods and properties that we define in Constructor Prototype property.

const Person = function (firstName, birthYear) {
	// Instance Properties
	this.firstName = firstName;
	this.birthYear = birthYear;
};

// creating function calcAge and linking to prototype
Person.prototype.calcAge = function () {
	console.log(2021 - this.birthYear);
};

// adding properties
Person.prototype.species = 'Homo Sapiens';

const p1 = new Person('Jonas', 1991);
console.log(p1.__proto__); // prototype of p1 object
console.log(p1.__proto__.__proto__); // prototype chaining. Accessing Object class

// Object class is top of scope chain
console.log(p1.__proto__.__proto__.__proto__); // null

// accessing constructor
console.log(Person.prototype.constructor);
// ƒ (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// }

// prototype of arrays
const arr = [1, 2, 3, 2, 5];
console.log(arr.__proto__); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

console.log(arr.__proto__ === Array.prototype); // true

// method to return all unique elements of an Array
// instead of creating a separate function, we can use prototypes in arrays
// so all arrays can inherit this method
Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique()); // (4) [1, 2, 3, 5]

// Extending prototype of built-in objects is not a good idea. Reason being:
// 1. Next version of JS might add a function of same name that we are adding but usage would be different
// 2. Multiple developer can create same function with different names

// A function itself is also an object and therefor it has its own prototype
console.dir(p1.calcAge);
console.dir(x => (x = 2));
