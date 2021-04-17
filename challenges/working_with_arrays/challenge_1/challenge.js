'use strict';

// test data
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

// minimum age for dog to be an adult
const minimumAdultAge = 3;

// creating shallow copy and removing junk values
const juliaUpdatedData = juliaData.slice(1, -2);

console.log(juliaUpdatedData); // (2) [5, 2]
console.log(juliaData); // (5) [3, 5, 2, 12, 7]

// check is dog is adult or puppy
const display = function (arr) {
	arr.forEach(function (age, i) {
		const message = `Dog number ${i + 1} ${
			age >= minimumAdultAge
				? `is an adult, and is ${age} years old`
				: 'is still a puppy'
		}`;
		console.log(message);
	});
};

// function to club all dogs
const checkDogs = function (arr1, arr2) {
	const dogs = [...arr1, ...arr2];
	console.log(dogs); // (7) [5, 2, 4, 1, 15, 8, 3]

	display(dogs);
};

checkDogs(juliaUpdatedData, kateData);

// Dog number 0 is an adult, and is 5 years old
// Dog number 1 is still a puppy
// Dog number 2 is an adult, and is 4 years old
// Dog number 3 is still a puppy
// Dog number 4 is an adult, and is 15 years old
// Dog number 5 is an adult, and is 8 years old
// Dog number 6 is an adult, and is 3 years old
