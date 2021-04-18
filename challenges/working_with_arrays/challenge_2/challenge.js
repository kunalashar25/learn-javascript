'use strict';

// test data
const testData = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
	const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
	console.log(`Human Ages: ${humanAges}`); // Human Ages: 36,4,32,2,76,48,28

	const adult = humanAges.filter(age => age >= 18);
	console.log(adult); // (5) [36, 32, 76, 48, 28]

	const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;

	return average;
};

const average = calcAverageHumanAge(testData);
console.log(`Average age is ${average}`); // Average age is 44
