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
const displayMovements = function (movements, sort = false) {
	// removing existing content present in the container
	containerMovements.innerHTML = '';

	// creating movement copy using slice method so sort method will not change original movements object
	const sortedMovement = sort
		? movements.slice().sort((a, b) => a - b) // sort in ascending order
		: movements;

	// iterate on each movements for the given array
	sortedMovement.forEach(function (mov, i) {
		// determine type of transaction
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		// creating html element based on data received
		const html = `
			<div class="movements__row">
				<div class="movements__type movements__type--${type}">
					${i + 1} ${type}
				</div>
				<div class="movements__date">3 days ago</div>
				<div class="movements__value">${mov} €</div>
			</div>
		`;

		// adding new movements row to existing element
		containerMovements.insertAdjacentHTML('afterbegin', html); // check MDM for all such values
	});
};

// Calculate Balance
const calcAndDisplayBalance = function (account) {
	// add balance to account object
	account.balance = account.movements.reduce((total, m) => total + m, 0);

	// showing total balance on Screen
	labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = function (account) {
	// caluclate total amount received in the account
	const incomes = account.movements
		.filter(m => m > 0)
		.reduce((sum, m) => sum + m, 0);
	labelSumIn.textContent = `${incomes} €`;

	// caluclate total amount transferred out of account
	const out = account.movements
		.filter(m => m < 0)
		.reduce((sum, m) => sum + m, 0);
	labelSumOut.textContent = `${Math.abs(out)} €`;

	const interestAmount = account.interestRate / 100; // in %
	const interest = account.movements
		.filter(m => m > 0) // filter all incoming transaction
		.map(deposit => deposit * interestAmount) // apply interest on each incoming transaction
		.filter((interst, i, arr) => {
			//console.log(arr);
			return interst >= 1; // filtering interest which is > 1€
		})
		.reduce((interest, m) => interest + m); // calculate total interest

	// show interest on screen
	labelSumInterest.textContent = `${interest} €`;
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

// Event Handles
let currentAccount;
btnLogin.addEventListener('click', function (event) {
	// prevent form from submitting
	event.preventDefault();

	// set focus on username field
	inputLoginUsername.focus();

	// find if user exist in array
	currentAccount = accounts.find(
		acc => acc.username === inputLoginUsername.value
	);
	console.log(currentAccount);

	// check user account pin for login
	// if username is invalid then pin will not be checked as we are using ?. operator
	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// display UI and welcome message
		labelWelcome.textContent = `Welcome Back ${
			currentAccount.owner.split(' ')[0]
		}`;

		// set opacity to visible
		containerApp.style.opacity = 100;

		// clear username and pin after login
		inputLoginUsername.value = inputLoginPin.value = '';

		// remove focus from pin field
		inputLoginPin.blur();

		// update display
		updateDisplay(currentAccount);
	}
});

const updateDisplay = function (account) {
	// display movements
	displayMovements(account.movements);

	// display balance
	calcAndDisplayBalance(account);

	// display summary
	calcDisplaySummary(account);
};

btnTransfer.addEventListener('click', function (event) {
	// prevent form from submitting
	event.preventDefault();

	// transfer amount
	const amount = Number(inputTransferAmount.value);

	// transfer to
	const receiverAccount = accounts.find(
		account => account.username === inputTransferTo.value
	);

	// clear transfer fields
	inputTransferTo.value = inputTransferAmount.value = '';

	// remove focus from the field
	inputTransferAmount.blur();

	// check if amount can be transferred
	if (
		amount > 0 && // not transferring negative amount to own account
		currentAccount.balance >= amount && // has sufficient balance to transfer
		receiverAccount && // to avoid undefined value
		receiverAccount?.username !== currentAccount.username // cannot transfer to own account
	) {
		// deduct money from current account
		currentAccount.movements.push(-amount);

		// add money to receiver account
		receiverAccount.movements.push(amount);

		// update UI to display above transaction for current account
		updateDisplay(currentAccount);
	}
});

// loan
btnLoan.addEventListener('click', function (event) {
	// prevent form from submitting
	event.preventDefault();

	// capture loan amount
	const loanAmount = Number(inputLoanAmount.value);

	// clear loan amount field
	inputLoanAmount.value = '';

	// check if user contains any transaction of 10% of loan amount
	if (
		loanAmount > 0 &&
		currentAccount.movements.some(m => m >= loanAmount * 0.1)
	) {
		// add amount to the account
		currentAccount.movements.push(loanAmount);

		// update UI to display above transaction for current account
		updateDisplay(currentAccount);
	}
});

// close account
btnClose.addEventListener('click', function (event) {
	// prevent form from submitting
	event.preventDefault();

	// get username and pin from close account
	const username = inputCloseUsername.value;
	const pin = Number(inputClosePin.value);

	// clear fields
	inputCloseUsername.value = inputClosePin.value = '';

	// verify if valid credentials entered
	if (currentAccount.username === username && currentAccount.pin === pin) {
		// find index of current accunt in array
		// findIndex returns index of the found element
		const index = accounts.findIndex(
			account => account.username === currentAccount.username
		);

		// delete current account
		accounts.splice(index, 1);

		// set opacity to 0 so user cannot perform any operation
		containerApp.style.opacity = 0;
	}
});

let isMovementSorted = false;

btnSort.addEventListener('click', function (event) {
	// prevent form from submitting
	event.preventDefault();

	// invert the sort flag on each click
	isMovementSorted = !isMovementSorted;

	// display movement based on sort flag
	displayMovements(currentAccount.movements, isMovementSorted);
});

// call functions
createUsernames(accounts);

/////////////////////////////////////////////////

// -------------------------------------------------------------------------------------------------------------------------------------------

// 1. calculate amount depostied in the bank including all the accounts
const bankDeposits = accounts
	.flatMap(acc => acc.movements)
	.filter(m => m > 0)
	.reduce((total, m) => total + m, 0);
console.log(bankDeposits); // 25180

// 2. Count deposit in bank with atleaset 1000$
const numDeposit1000 = accounts
	.flatMap(acc => acc.movements)
	.filter(m => m >= 1000).length;
console.log(numDeposit1000); // 6

// same example with reduce method
const numDeposit1000_2 = accounts
	.flatMap(acc => acc.movements)
	.reduce((length, m) => (m >= 1000 ? ++length : length), 0);
console.log(numDeposit1000_2); // 6

// 3. create object which contains sum of deposits and withdrawals using reduce method
const sums = accounts
	.flatMap(acc => acc.movements)
	.reduce(
		(total, m) => {
			m > 0 ? (total.deposits += m) : (total.withdrawals += m);
			return total;
		},
		{ deposits: 0, withdrawals: 0 }
	); // our objective is to return as object, so default value can be object as well
console.log(sums); // {deposits: 25180, withdrawals: -7340}

// destructurring sums varaible to directly store deposis and withdrawals
const { deposits, withdrawals } = accounts
	.flatMap(acc => acc.movements)
	.reduce(
		(total, m) => {
			total[m > 0 ? 'deposits' : 'withdrawals'] += m; // alternate way of writing above statement
			return total;
		},
		{ deposits: 0, withdrawals: 0 }
	); // our objective is to return as object, so default value can be object as well
console.log(deposits, withdrawals); // 25180 -7340

// 4. create a function to convert any string to title case
const convertToTileCase = function (title) {
	// convert first char to captial
	const capitalize = str => str[0].toUpperCase() + str.slice(1);

	// exceptions remains in lower case
	const exceptions = [
		'a',
		'an',
		'the',
		'but',
		'or',
		'on',
		'in',
		'with',
		'and',
	];

	// convert title
	const titleCase = title
		.toLowerCase()
		.split(' ')
		.map(word => (exceptions.includes(word) ? word : capitalize(word)))
		.join(' ');

	return capitalize(titleCase);
};

const str1 = 'this is a nice title!';
const str2 = 'this is a LONG title but not too long!';
const str3 = 'and here is another title with an EXAMPLE';

console.log(convertToTileCase(str1)); // This Is a Nice Title!
console.log(convertToTileCase(str2)); // This Is a Long Title but Not Too Long!
console.log(convertToTileCase(str3)); // And Here Is Another Title with an Example
