'use strict';

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;
	}

	deposit(amount) {
		this.movements.push(amount);
	}

	withdrawal(amount) {
		this.deposit(-amount);
	}
}

const a1 = new Account('Jonas', 'Euro', 1111);
console.log(a1); // Account {owner: "Jonas", currency: "Euro", pin: 1111, movements: Array(0), locale: "en-US"}

// NEVER use it this way.
// Always create methods to interact with the properties
a1.movements.push(250);
a1.movements.push(-50);
console.log(a1.movements); // (2) [250, -50]

a1.deposit(500);
a1.withdrawal(200);
console.log(a1.movements); // (4) [250, -50, 500, -200]
