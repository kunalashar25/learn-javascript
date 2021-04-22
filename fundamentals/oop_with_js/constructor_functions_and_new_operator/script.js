'use strict';

// Constructor Funtion - to build an object using a function
// Constructor Function are same as regular function.
// Only difference is, we call Constructor Funtion with new keyword

// construction function always start with a capital letter
// Arrow functio will not work in Constructor function and this is beacuse it does not have its own this keyword
const Person = function (firstName, birthYear) {
	// Instance Properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// BAD PRACTICE - never create method inside a constructor function
	this.calcAge = function () {
		console.log(2021 - birthYear);
	};
	// We will use Prototype and Prototype Inheritance to resolve this issue.
};

// we call using new keyword
const p1 = new Person('Jonas', '1991');
console.log(p1); // Person {firstName: "Jonas", birthYear: "1991"}

// What happens when we call a function with a new keyword?
// 4 Steps Occurs Behind the Scene
// 1. New empty object {} is created
// 2. function is called and this keyword in function will be set to newly created object
// 3. newly created object is linked to a prototype
// 4. Object is automatically returned from the Constructor Function

const p2 = new Person('Kelvin', '1985');
console.log(p2); // Person {firstName: "Kelvin", birthYear: "1985"}

// Constructor Function acts as a blueprint in this case
// New data set can be easily created by referring to the blue print

// p1 and p2 are instance of Person
console.log(p1 instanceof Person); // true
