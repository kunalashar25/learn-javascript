'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// public api repository
// https://github.com/public-apis/public-apis

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
	countriesContainer.style.opacity = 1;
};

// using arrow functions in then() method to look more cleaner
// chaining multiple ajax calls
const getCountryData = function (country, className) {
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
		.then(data => renderCountry(data, 'neighbour'));
};

getCountryData('canada');
