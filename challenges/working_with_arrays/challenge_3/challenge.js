'use strict';

// test data
const testData = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = ages => {
	const average = ages
		.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
		.filter(age => age >= 18)
		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
	return average;
};

const average = calcAverageHumanAge(testData);
console.log(`Average age is ${average}`); // Average age is 44
