'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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
