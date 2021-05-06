'use strict';

const getJson = function (url, errorMessage = 'Something went wrong,') {
	return fetch(url).then(response => {
		if (!response.ok)
			throw new Error(`${errorMessage} - ${response.status}`);

		return response.json();
	});
};

const whereAmI = function (lat, long) {
	getJson(
		`https://geocode.xyz/${lat},${long}?geoit=json`,
		'Geo Location Error'
	)
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

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
