'use strict';

const PersonProto = {
	calcAge() {
		console.log(2021 - this.birthYear);
	},
	init(name, birthYear) {
		this.name = name;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birthYear, course) {
	PersonProto.init.call(this, name, birthYear);
	this.course = course;
};

const kelvin = Object.create(StudentProto);
kelvin.init('Kelvin', 2010, 'IT');
console.log(kelvin); // {name: "Kelvin", birthYear: 2010, course: "IT"}

StudentProto.introduce = function () {
	console.log(`Hey! I'm ${this.name}`);
};

kelvin.introduce(); // Hey! I'm Kelvin
kelvin.calcAge(); // 11
