'use strict';

const flight = 'LM234';
const jonas = {
	name: 'jonas abc',
	passport: 'L562345789',
};

const checkIn = function (flightNumber, passanger) {
	// flight number got changed
	// not a good practice to update any value inside function
	// doing it for example purpose
	flightNumber = 'PQ123';
	passanger.name = 'Mr.' + passanger.name;

	if (passanger.passport === 'L562345789') {
		alert('Check IN');
	} else alert('Invalid Passport Number');
};

checkIn(flight, jonas);
console.log(flight, jonas); // LM234 {name: "Mr.jonas abc", passport: "L562345789"}

// flightNumber contains a copy of flight varaible
// updating flightNumber won't have any effect on flight varaible

// passanger and jonas are same object in memory
// Hence, passsanger name got updated in jonas as well

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
console.log(jonas); // {name: "Mr.jonas abc", passport: 6152689933}

// JS does not have passing by reference. Only passing by value is supported
