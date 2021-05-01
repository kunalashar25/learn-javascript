'use strict';

// static methods in constructor functions
const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

// static method on Constructor functio
Person.hey = function () {
	console.log(`Hey There!`);
};

Person.hey(); // Hey There!

const p1 = new Person('Kelvin', 1991);

// static methods are not inherited to the objects.
// It can only be called using Object reference
// p1.hey(); // Uncaught TypeError: p1.hey is not a function

// static methods in class
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	calcAge() {
		console.log(2021 - this.birthYear);
	}

	static hey() {
		console.log(`Hey There!`);
	}
}

PersonCl.hey(); // Hey There!
