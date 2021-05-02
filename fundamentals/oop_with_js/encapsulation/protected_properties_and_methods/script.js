'use strict';

// encapsulation means to keep some properties and methods private inside the class
// so they are not accessible from the outside.
class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this._pin = pin;
		// adding underscore means it is a protected property
		// so other developers will be aware and not use it directly outside class
		this._movements = [];
		this.locale = navigator.language;
	}

	deposit(amount) {
		this._movements.push(amount);
	}

	withdrawal(amount) {
		this.deposit(-amount);
	}

	_approveLoan(amount) {
		return true;
	}

	requestLoan(amount) {
		if (this._approveLoan(amount)) {
			this.deposit(amount);
			console.log(`Loan approved for Amount ${amount}`);
		}
	}

	getMovements() {
		return this._movements;
	}
}

const a1 = new Account('Jonas', 'Euro', 1111);
console.log(a1); // Account {owner: "Jonas", currency: "Euro", pin: 1111, _movements: Array(0), locale: "en-US"}

// NEVER use it this way.
// Always create methods to interact with the properties
a1._movements.push(250);
a1._movements.push(-50);
console.log(a1._movements); // (2) [250, -50]

a1.deposit(500);
a1.withdrawal(200);
console.log(a1._movements); // (4) [250, -50, 500, -200]

console.log(a1.getMovements()); // (4) [250, -50, 500, -200]
