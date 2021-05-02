'use strict';

// parent class
class Person {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	calcAge() {
		console.log(2021 - this.birthYear);
	}

	greet() {
		console.log(`Hey, I'm ${this.firstName}`);
	}
}

// We need 2 things to implement inheritance with classes
// 1. extends keyword
// 2. super function

class Student extends Person {
	constructor(firstName, birthYear, course) {
		super(firstName, birthYear);
		this.course = course;
	}

	introduce() {
		console.log(`Hey there. I'm ${this.firstName}`);
	}

	// override parent method
	calcAge() {
		console.log(`Student Age is ${2021 - this.birthYear}`);
	}
}

const s1 = new Student('Jonas', 2001, 'Computer Science');
console.log(s1); // Student {firstName: "Jonas", birthYear: 2001, course: "Computer Science"}

s1.greet(); // Hey, I'm Jonas
s1.introduce(); // Hey there. I'm Jonas
s1.calcAge(); // Student Age is 20
