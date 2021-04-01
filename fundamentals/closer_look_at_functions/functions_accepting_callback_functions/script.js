'use strict';

// generic function
const oneWord = function (word) {
	return word.replace(/ /g, '').toLowerCase();
};

console.log(oneWord('Arrest Now')); // arrestnow

// generic function
const upperFirstWord = function (word) {
	const [first, ...others] = word.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperFirstWord('arrest now')); // ARREST now

// higher order function
const transformer = function (word, fn) {
	console.log(`Transformed String: ${fn(word)}`);

	// can also use methods and properties of function
	console.log(`Transformed by: ${fn.name}`);
};

// passing function as value. Not calling the function
// Also known as Callback function
transformer('Javascript is easy to learn', upperFirstWord);
// Transformed String: JAVASCRIPT is easy to learn
// Transformed by: upperFirstWord

transformer('Javascript is easy to learn', oneWord);
// Transformed String: javascriptiseasytolearn
// Transformed by: oneWord

// Advantages of Callback
// 1. It splits our code into more reusable and interconnected parts.
// 2. Callback functions allows us to create abstraction.
// Abstraction means hide the details of code implementaion and foucs on the functionality
