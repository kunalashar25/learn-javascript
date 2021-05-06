'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Simulating lottery example
// fulfilled promise is to win a lottery
// rejected promise is to loose

// Promises are special kind of object in javascript
// we can create new promise using promise constructor
const lotteryPromise = new Promise(function (resolve, reject) {
	console.log('Lottery Draw....');

	// to simulate asynchronous behaviour
	setTimeout(function () {
		// chances to win lottery are 50%
		// Hence, if number is >= 0.5 then declare win
		if (Math.random() >= 0.5) {
			resolve('You WIN!'); // this function will mark promise as fulfilled promise
		} else reject(new Error('You lost your money..')); // this function will reject a promise
	}, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying: to convert callback based asynchronous behaviour to promise based

// promisify setTimeout() function and create a wait() function
const wait = function (seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

wait(2)
	.then(() => {
		console.log(`Waited for 2 seconds`);
		return wait(1);
	})
	.then(() => console.log(`Waited for 1 second`));
