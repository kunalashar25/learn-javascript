'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// public api repository
// https://github.com/public-apis/public-apis

// A promise in which error occurs is rejected promise
// the only way in which fetch promise rejects is when user looses internet connection
// Error in console: Uncaught (in promise) TypeError: Failed to fetch

// There are 2 ways to handle rejected promise
// 1. Pass a second callback function into the then() method
// 2. use catch() method to catch error occuring in the promise chain

const renderCountry = function (data, className) {
	console.log(data);
	const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
				+data.population / 1000000
			).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
				data.currencies[0].name
			}</p>
          </div>
        </article>
    `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
};

// using arrow functions in then() method to look more cleaner
// chaining multiple ajax calls
const getCountryData = function (country, className) {
	fetch(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(
			response => response.json(),
			err => alert(err) // step to handle error in promise
		)
		.then(data => {
			renderCountry(data[0], className);

			// get neighbouring borders
			const neighbourCountry = data[0].borders[0];

			// check if contains neighbour
			if (!neighbourCountry) return;

			return fetch(
				`https://restcountries.eu/rest/v2/alpha/${neighbourCountry}`
			);
		})
		.then(response => response.json())
		.then(data => renderCountry(data, 'neighbour'));
};

const renderError = function (msg) {
	countriesContainer.insertAdjacentText('beforeend', msg);
};

// instead of adding error function to all the then() methods
// we can write one common error function which will act globally using a catch()
const getCountryData2 = function (country, className) {
	fetch(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => response.json())
		.then(data => {
			renderCountry(data[0], className);

			// get neighbouring borders
			const neighbourCountry = data[0].borders[0];

			// check if contains neighbour
			if (!neighbourCountry) return;

			return fetch(
				`https://restcountries.eu/rest/v2/alpha/${neighbourCountry}`
			);
		})
		.then(response => response.json())
		.then(data => renderCountry(data, 'neighbour'))
		.catch(err => {
			// global catch to catch any error that occurs in entire promise chain
			console.error(`${err}`);
			renderError(`Something went wrong! ${err.message}`);
		})
		.finally(() => {
			countriesContainer.style.opacity = 1;
		}); // will be called always
};

btn.addEventListener('click', function () {
	getCountryData2('canada');
});
