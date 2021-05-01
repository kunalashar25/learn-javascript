'use strict';
// Prototypal Inheritance can also be achieved using Object.create
// There are no prototype properties involved.
// There is no constructor function or new operator
// We can use Object.create to manually set the prototype of an object

const PersonProto = {
	calcAge() {
		console.log(2021 - this.birthYear);
	},
	init(name, birthYear) {
		this.name = name;
		this.birthYear = birthYear;
	},
};

// prototype of new object
const steven = Object.create(PersonProto);
console.log(steven);

// adding properties
steven.name = 'Steven';
steven.birthYear = 2003;
steven.calcAge(); // 18

console.log(steven.__proto__); // {calcAge: ƒ} -> PersonProto
console.log(steven.__proto__ === PersonProto); //true

const kelvin = Object.create(PersonProto);
kelvin.init('kelvin', 1979);
kelvin.calcAge(); // 42
