'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// code from challenge 1
const getJson = function (url, errorMessage = 'Something went wrong,') {
	return fetch(url).then(response => {
		if (!response.ok)
			throw new Error(`${errorMessage} - ${response.status}`);

		return response.json();
	});
};

// promisify geolocation api to promise
const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const whereAmI = function () {
	getPosition()
		.then(pos => {
			const { latitude: lat, longitude: long } = pos.coords;

			return getJson(
				`https://geocode.xyz/${lat},${long}?geoit=json`,
				'Geo Location Error'
			);
		})
		.then(data => {
			console.log(`You are in ${data.city}, ${data.country}`);

			return getJson(
				`https://restcountries.eu/rest/v2/name/${data.country}`,
				'Country not found'
			);
		})
		.then(data => console.log(`${data[0].name}'s Data`))
		.catch(err => console.log(`Error Occurred: ${err.message}`));
};

btn.addEventListener('click', whereAmI);
