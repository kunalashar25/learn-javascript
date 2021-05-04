'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// public api repository
// https://github.com/public-apis/public-apis

// callback hell is when we we have a lot of nested callbacks in order to execute asynchronous task in sequence

const renderCountry = function (data, className) {
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
	countriesContainer.style.opacity = 1;
};

const getCountryData = function (country, className = '') {
	// old school way
	const request = new XMLHttpRequest();

	// Without CORS we cannot access third-party api in our code
	request.open('GET', 'https://restcountries.eu/rest/v2/name/' + country);
	request.send();

	request.addEventListener('load', function () {
		// this keyword here refers to request object
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		renderCountry(data, className);

		// get neighbouring country from the response
		const [neighbourCountry] = data.borders;

		// check if contains neighbour
		if (!neighbourCountry) return;

		// get neighbour country data
		getCountryData(neighbourCountry, 'neighbour');
	});
};

getCountryData('canada');

// callback hell can be escaped using promises in javascript
