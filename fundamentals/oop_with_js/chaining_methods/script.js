'use strict';

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
		return this;
	}

	withdrawal(amount) {
		this.deposit(-amount);
		return this;
	}

	requestLoan(amount) {
		if (this.#approveLoan(amount)) {
			this.deposit(amount);
			console.log(`Loan approved for Amount ${amount}`);
		}
		return this;
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

// Chaining methods
a1.deposit(200).deposit(500).requestLoan(5000).withdrawal(1000);
console.log(a1.getMovements()); // (4)[(200, 500, 5000, -1000)];

// Refer this image for entire summary on classes
// /concept_images/oop_with_js/summary_of_classes.png
