'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Promise.race()
// receives multiples promise and also returns a promise
// promise returned by race() method is settled as soon as one of the input promise settles.
// settled simple means that the value is available but it doesn't mater if it is rejected or fulfilled

const getJson = function (url, errorMessage = 'Something went wrong,') {
	return fetch(url).then(response => {
		if (!response.ok)
			throw new Error(`${errorMessage} - ${response.status}`);

		return response.json();
	});
};

(async function () {
	const res = await Promise.race([
		getJson(`https://restcountries.eu/rest/v2/name/singapore`),
		getJson(`https://restcountries.eu/rest/v2/name/canada`),
		getJson(`https://restcountries.eu/rest/v2/name/asdasdsad`), // will throw error
	]);

	// these promises will race against each other like a real race
	// result of this promise would be the result of promise that was returned first
	// We might get different result if we run this code multiple times.
	console.log(res[0]);
})();

const timeout = function (seconds) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error('Request took too long!'));
		}, seconds * 1000);
	});
};

// this approach can be used to timeout a user if login call is taking a long time
Promise.race([
	getJson(`https://restcountries.eu/rest/v2/name/singapore`),
	getJson(`https://restcountries.eu/rest/v2/name/egypt`),
	timeout(1),
])
	.then(res => console.log(res))
	.catch(err => console.error(err));

// Promise.allSettled()
// returns an array of settled promises
// It never shortcircuits like Promise.all()
// It will return all the results of all the promises
Promise.allSettled([
	Promise.resolve('Success'),
	Promise.reject('Rejected'),
	Promise.resolve('Another Success'),
]).then(res => console.log(res));
// (3) [{…}, {…}, {…}]

Promise.all([
	Promise.resolve('Success'),
	Promise.reject('Rejected'),
	Promise.resolve('Another Success'),
]).then(res => console.log(res));
// Uncaught (in promise) Rejected

// Promise.any()
// returns first fullfilled promises
// will ignore rejected promises
Promise.any([
	Promise.reject('Rejected'),
	Promise.resolve('Success'),
	Promise.resolve('Another Success'),
]).then(res => console.log(res));
// Success

// Promise.all() and Promise.race() are the most important one
