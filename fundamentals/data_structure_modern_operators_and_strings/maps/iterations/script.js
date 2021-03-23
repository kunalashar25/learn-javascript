'use strict';

// ---------------------------------------------------------------------------------------------------------------------------------

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// populating values in map w/o using set method
// creating an array
// element at position 1 will be key and at 2 will be value
const question = new Map([
	['question', 'Best Programming language?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JS'],
	['correct', 3],
	[true, 'Your answer is Correct'],
	[false, 'Try Again!'],
]);

console.log(question); // Map(7) {"question" => "Best Programming language?", 1 => "C", 2 => "Java", 3 => "JS", "correct" => 3, …}

// Convert object to Map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap); // Map(3) {"thu" => {…}, "fri" => {…}, "sat" => {…}}

// Iterating Maps
console.log(question.get('question'));
for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// Best Programming language?
// Answer 1: C
// Answer 2: Java
// Answer 3: JS

// get answer from the user
const answer = Number(prompt('Your answer'));
console.log('User answer: ' + answer);

// check if user entered correct answer
console.log(question.get(question.get('correct') === answer));

// convert Map to array using Spread Operator
console.log([...question]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// useful methods
console.log(question.keys()); // MapIterator {"question", 1, 2, 3, "correct", …}
console.log([...question.keys()]); // (7) ["question", 1, 2, 3, "correct", true, false]

console.log(question.values()); // MapIterator {"Best Programming language?", "C", "Java", "JS", 3, …}[[Entries]]0: "Best Programming language?"1: "C"2: "Java"3: "JS"4: 35: "Your answer is Correct"6: "Try Again!"__proto__: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "values"
console.log([...question.values()]); // (7) ["Best Programming language?", "C", "Java", "JS", 3, "Your answer is Correct", "Try Again!"]

console.log(question.entries());
// MapIterator {"question" => "Best Programming language?", 1 => "C", 2 => "Java", 3 => "JS", "correct" => 3, …}
