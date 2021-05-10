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

// this function is asynchronous function
// It'll keep running in the background while performing the code present inside it
// Once execution is completed. It'll automatically return a promise
const whereAmI = async function (country) {
	console.log(country);

	// Inside async function, we can have one or more awaits statement
	// awaits needs a promise
	// await is used to wait for the result of the promise
	// await will stop code execution at this point of the function until the promise is fulfilled (data is fetched)
	const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);

	// it is same as this commented code
	// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res =>
	// 	console.log(res)
	// );

	// Question: Isn't stopping the code blocking the execution?
	// Answer: No, this function is async function which is running in the background.
	// So it is not stopping the main thread of execution (not blocking call stack)
	console.log(res);

	// with the help of async await, we don't need to use then() method anymore
	// Behind the scene we are still using promises.
	// We are just using a different way to consume them

	// convert response in to json to fetch the data
	const data = await res.json();
	console.log(data[0]);

	// display on UI
	renderCountry(data[0]);
};

whereAmI('canada');

console.log(
	`This message should be printed first to see if whereAmI() is asynchronous`
);

// Output:
// canada
// This message should be printed first to see if whereAmI() is asynchronous
// Response {type: "cors", url: "https://restcountries.eu/rest/v2/name/canada", redirected: false, status: 200, ok: true, …}
// {name: "Canada", topLevelDomain: Array(1), alpha2Code: "CA", alpha3Code: "CAN", callingCodes: Array(1), …}
