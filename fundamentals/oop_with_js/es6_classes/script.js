'use strict';

// class expression
// classes are just special type of functions
const PersonCls = class {};

// class declaration
class Person {
	// first thing to do is to add a constructor method inside the class
	// constructor works in similar way like a constructor function
	// constructor will be called whenever we call this class using new keyword
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	// adding methods
	// this method will be added to the .prototype property of the Object and not to the object themselves
	//
	calcAge() {
		console.log(2021 - this.birthYear);
	}
}

const p1 = new Person('Jess', 2011);
console.log(p1); // Person {firstName: "Jess", birthYear: 2011}

p1.calcAge();

// adding method using prototype
Person.prototype.greet = function () {
	console.log(`Hey ${this.firstName}`);
};

p1.greet(); // Hey Jess

// Note:
// 1. Classes are not Hoisted. Function Declarations are Hoisted.
// Which means we can use them before they are declared in the code but with classes, that does not work.
// 2. Classes are first class citizens, means we can pass them into functions and return them from functions.
// 3. Classes is always executed in strict mode
