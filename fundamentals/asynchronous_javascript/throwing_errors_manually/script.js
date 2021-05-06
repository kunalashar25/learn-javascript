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
};

const renderError = function (msg) {
	countriesContainer.insertAdjacentText('beforeend', msg);
};

// created a generic function to call the api and return json response
const getJson = function (url, errorMsg = 'Something went wrong!') {
	return fetch(url).then(response => {
		if (!response.ok)
			// thorwing own error
			throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};

const getCountryData = function (country, className) {
	getJson(
		`https://restcountries.eu/rest/v2/name/${country}`,
		'Country not found!'
	)
		.then(data => {
			renderCountry(data[0], className);

			// get neighbouring borders
			const neighbourCountry = data[0].borders[0];

			// check if contains neighbour
			if (!neighbourCountry) throw new Error(`No Neighbour Found!`);

			return getJson(
				`https://restcountries.eu/rest/v2/alpha/${neighbourCountry}`,
				'Neighbour Country not found!'
			);
		})
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
	getCountryData('maldives'); // Error: Country not found 404
});
