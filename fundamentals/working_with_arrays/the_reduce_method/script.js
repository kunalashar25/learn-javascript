'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Add movents to the container
const displayMovements = function (movements) {
	// removing existing content present in the container
	containerMovements.innerHTML = '';

	// iterate on each movements for the given array
	movements.forEach(function (mov, i) {
		// determine type of transaction
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		// creating html element based on data received
		const html = `
			<div class="movements__row">
				<div class="movements__type movements__type--${type}">
					${i + 1} ${type}
				</div>
				<div class="movements__date">3 days ago</div>
				<div class="movements__value">${mov}</div>
			</div>
		`;

		// adding new movements row to existing element
		containerMovements.insertAdjacentHTML('afterbegin', html); // check MDM for all such values
	});
};

// Calculate Balance
const calcAndDisplayBalance = function (movements) {
	const balance = movements.reduce((total, m) => total + m, 0);

	// showing total balance on Screen
	labelBalance.textContent = `${balance} €`;
};

// create login usernames
const createUsernames = function (accs) {
	// using forEach as we do not want to return new array, our objective is to modify current object
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(' ')
			.map(name => name[0])
			.join('');
	});
};

// call functions
createUsernames(accounts);
displayMovements(account1.movements);
calcAndDisplayBalance(account1.movements);

/////////////////////////////////////////////////

// boils down all elements of an array to a single value
const balance = movements.reduce(function (total, m, i) {
	console.log(`Iteration ${i + 1}: ${total}`);
	return total + m;
}, 0); // 0 is initial value of total that will be considered in the first iteration.
console.log(balance); // 3840

// Iteration 1: 0
// Iteration 2: 200
// Iteration 3: 650
// Iteration 4: 250
// Iteration 5: 3250
// Iteration 6: 2600
// Iteration 7: 2470
// Iteration 8: 2540
// 3840

// max value in movements array
const max = movements.reduce((max, c) => {
	if (max > c) {
		return max;
	} else return c;
}, movements[0]);
console.log(max); // 3000
