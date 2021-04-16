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

/////////////////////////////////////////////////

// print movements in bank account using for of loop
for (const m of movements) {
	if (m > 0) console.log(`You deposited ${m}`);
	else console.log(`You Withdrew ${Math.abs(m)}`);
}

// You deposited 200
// You deposited 450
// You Withdrew 400
// You deposited 3000
// You Withdrew 650
// You Withdrew 130
// You deposited 70
// You deposited 1300

// perform same example using for each loop
console.log('Printing using forEach');

// forEach is higher order function which requires a callback function in order to say what to do
movements.forEach(function (m) {
	if (m > 0) console.log(`You deposited ${m}`);
	else console.log(`You Withdrew ${Math.abs(m)}`);
});

// You deposited 200
// You deposited 450
// You Withdrew 400
// You deposited 3000
// You Withdrew 650
// You Withdrew 130
// You deposited 70
// You deposited 1300

// ------------------------------------------------------------------------------------------------------------------------------------

// ACCESSING INDEX

// for of loop
for (const [i, v] of movements.entries()) {
	console.log(`Movement number : ${i}`);

	if (v > 0) console.log(`You deposited ${v}`);
	else console.log(`You Withdrew ${Math.abs(v)}`);
}

// Movement number : 0
// You deposited 200
// Movement number : 1
// You deposited 450
// and so on

// for each loop
movements.forEach(function (m, i) {
	console.log(`Movement number : ${i}`);

	if (m > 0) console.log(`You deposited ${m}`);
	else console.log(`You Withdrew ${Math.abs(m)}`);
});

// Movement number : 0
// You deposited 200
// Movement number : 1
// You deposited 450
// and so on

// ------------------------------------------------------------------------------------------------------------------------------------

// When to use forEach and when to use for of
// 1. Cannot break out of forEach loop
// 2. Continue and break does not work with forEach
// 3. forEach will loop over the entire array
