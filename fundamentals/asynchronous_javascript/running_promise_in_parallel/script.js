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
whereAmI('canada');
console.log('Print 3');

const getJson = function (url, errorMessage = 'Something went wrong,') {
	return fetch(url).then(response => {
		if (!response.ok)
			throw new Error(`${errorMessage} - ${response.status}`);

		return response.json();
	});
};

const get3Countries = async function (c1, c2, c3) {
	try {
		// const [data1] = await getJson(
		// 	`https://restcountries.eu/rest/v2/name/${c1}`
		// );
		// const [data2] = await getJson(
		// 	`https://restcountries.eu/rest/v2/name/${c2}`
		// );
		// const [data3] = await getJson(
		// 	`https://restcountries.eu/rest/v2/name/${c3}`
		// );

		// it takes array of promises
		// and will run all promises at the same time
		// it will return a new promise
		// if one promise rejects then whole Promise.all will be rejected
		const data = await Promise.all([
			getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
			getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
			getJson(`https://restcountries.eu/rest/v2/name/${c3}`),
		]);

		// Promise.all() is also known as a combinator function
		// It allows us to combine multiple promises

		console.log(data.map(d => d[0].capital));
	} catch (error) {
		console.error(error);
	}
};

get3Countries('portugal', 'canada', 'singapore');
