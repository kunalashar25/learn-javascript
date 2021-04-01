'use strict';

// Opposite of Function calling functions

const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting}-${name}`);
	};
};

// store retured function in var g
const g = greet('Hey');
g('Kelvin'); // Hey-Kelvin
g('Jonas'); // Hey-Jonas

greet('Hello')('Thomas'); // Hello-Thomas

// this concepts will be helpful with functional programming

// same concept using arrow functions
const say = greeting => {
	return name => {
		console.log(`${greeting} ${name}`);
	};
};

say('heya')('Charlie'); // heya Charlie
