'use strict';

// parent
const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2021 - this.birthYear);
};

// child
const Student = function (firstName, birthYear, course) {
	// Person(firstName, birthYear);
	// cannot call Person this way as currently we are trying to user person as regular function i.e. w/o new keyword
	// In regular function, this keyword is set to undefined. Hence, the error
	// Uncaught TypeError: Cannot set property 'firstName' of undefined

	// we need to manually set this keyword for Person
	Person.call(this, firstName, birthYear);
	this.course = course;
};

// Linking Student and Person protoype manualy to obtain inheritance
// this connection needs to be made before we add any new methods to the prototype of students
// Because, Object.create() will return an empty object
// adn we call add methods to Student prototype after that
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
	console.log(`Hello, I am ${this.firstName}`);
};

const mike = new Student('Mike', 2015, 'Computer Science');
console.log(mike); // Student {firstName: "Mike", birthYear: 2015, course: "Computer Science"}
mike.introduce(); // Hello, I am Mike
mike.calcAge(); // 6

// to verify if inheritance was created properly
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true

// this should point to Student constructor and not Person constructor
console.dir(Student.prototype.constructor); // ƒ Person(firstName, birthYear)

// Need to assign this manually
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // ƒ Student(firstName, birthYear, course)
