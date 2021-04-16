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

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'p', 'l', 'a', 'r'];
// slice method - extract part of any array w/o changing the original array
// slice methods returns a new array
console.log(arr.slice(2)); // (3) ["c", "d", "e"]
console.log(arr.slice(2, 4)); // (2) ["c", "d"]
console.log(arr.slice(-2)); // (2) ["d", "e"]
console.log(arr.slice(1, -1)); // (3) ["b", "c", "d"]

// shallow copy of array can be done in below 2 ways
console.log(arr.slice()); // (5) ["a", "b", "c", "d", "e"]
console.log([...arr]); // (5) ["a", "b", "c", "d", "e"]

// ------------------------------------------------------------------------------------------------------------------------------------

// splice method - same as slice method but it changes the original array
console.log(arr.splice(2)); // (3) ["c", "d", "e"]

// extracted elements are deleted from the original array
console.log(arr); // (2) ["a", "b"]

// removing last value
arr.splice(-1);
console.log(arr); // ["a"]

// ------------------------------------------------------------------------------------------------------------------------------------

// reverse - will mutate the original array
console.log(arr2.reverse()); // (5) ["r", "a", "l", "p", "j"]
console.log(arr2); // (5) ["r", "a", "l", "p", "j"]

// ------------------------------------------------------------------------------------------------------------------------------------

// concat 2 arrays
const letters = arr.concat(arr2);
console.log(letters); // (6) ["a", "r", "a", "l", "p", "j"]
console.log([...arr, ...arr2]); // (6) ["a", "r", "a", "l", "p", "j"]

// ------------------------------------------------------------------------------------------------------------------------------------

// join
console.log(letters.join('-')); // a-r-a-l-p-j
