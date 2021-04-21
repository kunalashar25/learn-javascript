'use strict';

// test data
const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];

const eatingOKPortin = (current, recommended) =>
	current > recommended * 0.9 && current < recommended * 1.1;

// 1. Recommended food portion
dogs.forEach(d => {
	d.recommendedFood = Math.trunc(d.weight ** 0.75 * 28); // to truncate the decimals
	console.log(d);
});

// 2. Log Sarah dog to console
dogs.forEach(d => {
	if (d.owners.includes('Sarah')) {
		console.log(
			d.curFood > d.recommendedFood
				? 'Eating too much'
				: 'Eating too little'
		);
	}
});

// can also find dog using this approach
const dogSarah = dogs.find(d => d.owners.includes('Sarah'));
console.log(
	dogSarah.curFood > dogSarah.recommendedFood
		? 'Eating too much'
		: 'Eating too little'
); // Eating too much

// 3. array based on eating
const ownersEatTooMuch = dogs
	.filter(d => d.curFood > d.recommendedFood)
	.flatMap(d => d.owners);
console.log(ownersEatTooMuch); // (3) ["Matilda", "Sarah", "John"]

const ownersEatTooLittle = dogs
	.filter(d => d.curFood < d.recommendedFood)
	.flatMap(d => d.owners);
console.log(ownersEatTooLittle); // (3) ["Alice", "Bob", "Michael"]

// 4. log a string
const tooMuch = `${ownersEatTooMuch.join(' and ')}'s dogs eat too much`;
console.log(tooMuch); // Matilda and Sarah and John's dogs eat too much

const tooLittle = `${ownersEatTooLittle.join(' and ')}'s dogs eat too little`;
console.log(tooLittle); // Alice and Bob and Michael's dogs eat too little

// 5. exactly the portion
const exactFoodAmount = dogs.some(d => d.curFood == d.recommendedFood);
console.log(exactFoodAmount); // false

// 6. ok amount of odd
const okFoodAmount = dogs.some(d =>
	eatingOKPortin(d.curFood, d.recommendedFood)
);
console.log(okFoodAmount); // true

// 7. array of dogs eating ok food
const arrayOfOk = dogs.filter(d =>
	eatingOKPortin(d.curFood, d.recommendedFood)
);
console.log(arrayOfOk);

// 8. sort by recommended food
const shallowDogs = dogs
	.slice()
	.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowDogs);
