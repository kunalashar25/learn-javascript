'use strict';

// We don't need to return a function from another function in order to create a closure

// Example 1
let f;

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

const h = function () {
	const b = 111;
	f = function () {
		console.log(b * 2);
	};
};

g();
f(); // 46 - still able to access a variable even when function g() execution has ended
console.dir(f); // 0: Closure (g) {a: 23}

// Reassign f function
h();
f(); // 222
console.dir(f); // 0: Closure (h) {b: 111}

// ----------------------------------------------------------------------------------------------------------------------------------

// Example 2 - Timer
const boardPassangers = function (n, wait) {
	const perGroup = n / 3;

	// setTimeout contains a callback function
	setTimeout(function () {
		console.log(`We are now boarding all ${n} passangers`);
		console.log(`There are 3 groups, each with passanger ${perGroup}`);
	}, wait * 1000);

	console.log(`Will starts boarding in ${wait} seconds`);
};

// closure has priority for scope change. This varaible will be used only when line:35 var does not exist
const perGroup = 10;

boardPassangers(99, 3);
