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

console.log(Person.prototype); // {constructor: ƒ}

// creating function calcAge and linking to prototype
Person.prototype.calcAge = function () {
	console.log(2021 - this.birthYear);
};

console.log(Person.prototype); // {calcAge: ƒ, constructor: ƒ}

// all object created using Constructor Funtion can use calcAge() function
const p1 = new Person('Jonas', '1991');
p1.calcAge(); // 30

// each object has a property called __proto__
// Step #3 will create __proto__ property and sets it's value to the prototype property that's being calles
// Step #3  from previos session: newly created object is linked to a prototype
console.log(p1.__proto__); // {calcAge: ƒ, constructor: ƒ}

// Person.prototype is not the prototype of Person
// It is what is going to be used as the prototype of all the objects that are created with Person Constructor Function
console.log(p1.__proto__ === Person.prototype); // true

// other built-in methods to test above concept
console.log(Person.prototype.isPrototypeOf(p1)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Setting properties on prototypes
Person.prototype.species = 'Homo Sapiens';
console.log(p1); // species: "Homo Sapiens" visible under __proto__
console.log(p1.species); // Homo Sapiens

// To check if properties are own or Inherited from prototype
console.log(p1.hasOwnProperty('firstName')); // true
console.log(p1.hasOwnProperty('species')); // false
// species is accessible from prototype and not directly linked to p1 object. Hence false
