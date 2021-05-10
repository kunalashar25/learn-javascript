'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// copying for old files
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

const whereAmI = async function (country) {
	try {
		const res = await fetch(
			`https://restcountries.eu/rest/v2/name/${country}`
		);

		// convert response in to json to fetch the data
		const data = await res.json();

		// display on UI
		renderCountry(data[0]);

		return `You are in ${data[0].name}`;
	} catch (error) {
		console.error(error.message);
	}
};

console.log('Print 1');

// async function always returns a promise
// const country = whereAmI('canada');
// console.log(`Print ${country}`); //Print [object Promise]

// use then method
whereAmI('canada').then(country => console.log(country));
console.log('Print 3');

// async function as IIFE
(async function () {
	try {
		const country = await whereAmI('canada');
		console.log(country);
	} catch (error) {
		console.error(error);
	}
})();
