'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// public api repository
// https://github.com/public-apis/public-apis

const request = fetch('https://restcountries.eu/rest/v2/name/canada');
console.log(request); // Promise {<pending>}

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

const getCountryData = function (country) {
	// we can call a then() on a fulfilled promise
	// in then(), we can pass a callback function that should be executed as soon as result is available
	fetch(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(function (response) {
			console.log(response);
			// Response {type: "cors", url: "https://restcountries.eu/rest/v2/name/canada", redirected: false, status: 200, ok: true, …}

			// we cannot directly read the data in response body
			// we need to call json() on the response
			// json() itself is an async function
			// so it'll also return a new promise
			// console.log(response.json()); // Promise {<pending>}

			// way to handle it is to return it from here and call another then() to main function
			return response.json();
		})
		.then(function (data) {
			console.log(data); // [{…}]

			// using render function from previous lectures to display on UI
			renderCountry(data[0]);
		});
};

getCountryData('canada');
