'use strict';

// public fields
// private fields
// public methods
// private methods
// static versions of above four

class Account {
	// pubilc fields
	locale = navigator.language;

	// private fields
	#movements = []; // # marks fields as private
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;
	}

	// public methods
	deposit(amount) {
		this.#movements.push(amount);
	}

	withdrawal(amount) {
		this.deposit(-amount);
	}

	requestLoan(amount) {
		if (this.#approveLoan(amount)) {
			this.deposit(amount);
			console.log(`Loan approved for Amount ${amount}`);
		}
	}

	getMovements() {
		return this.#movements;
	}

	// private methods
	#approveLoan(amount) {
		return true;
	}
}

const a1 = new Account('Jonas', 'Euro', 1111);
console.log(a1); // Account {locale: "en-US", owner: "Jonas", currency: "Euro", _pin: 1111, #movements: Array(0)}

a1.deposit(500);
a1.withdrawal(200);

// console.log(a1.#movements);
// Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class

console.log(a1.getMovements()); // ((2) [500, -200]
a1.requestLoan(300);

// a1.#approveLoan(200);
// Uncaught SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
