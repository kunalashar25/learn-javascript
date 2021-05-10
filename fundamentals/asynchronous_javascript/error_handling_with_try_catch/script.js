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

// error handling with async-await
// cannot use catch() that we used to use before with then()
// with async-await, we use try-catch statement
// try-catch has nothing to do with async await
// But we can still use it to catch the error

// try should be followed by catch or finally
// Else we will get Uncaught SyntaxError: Missing catch or finally after try
try {
	let a = 1;
	const b = 2;
	b = 3;
} catch (err) {
	console.error(err.message);
	// Assignment to constant variable.
}

const whereAmI = async function (country) {
	try {
		const res = await fetch(
			`https://restcountries.eu/rest/v2/name/${country}`
		);

		// convert response in to json to fetch the data
		const data = await res.json();
		console.log(data[0]);

		// display on UI
		renderCountry(data[0]);
	} catch (error) {
		console.error(error.message);
	}
};

whereAmI('adasdasdas');
// Cannot read property 'flag' of undefined

console.log(
	`This message should be printed first to see if whereAmI() is asynchronous`
);
