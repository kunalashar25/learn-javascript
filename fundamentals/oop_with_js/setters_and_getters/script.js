'use strict';

// every object in JS can have setter and getter properties
const account = {
	owner: 'jonas',
	movements: [100, 120, -234],

	// add get keyword to make a function as getter function
	get latest() {
		return this.movements.slice(-1).pop();
	},

	// setter method
	set latest(m) {
		this.movements.push(m);
	},
};

// while calling we use it as a proeprty and not as a method
console.log(account.latest);

// set the values
// since we use setter as a property, we are assigning to value and not calling the function
account.latest = 50;
console.log(account.movements); // (4) [100, 120, -234, 50]
