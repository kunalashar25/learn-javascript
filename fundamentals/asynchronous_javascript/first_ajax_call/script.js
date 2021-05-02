'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// public api repository
// https://github.com/public-apis/public-apis

const getCountryData = function (country) {
	// old school way
	const request = new XMLHttpRequest();

	// Without CORS we cannot access third-party api in our code
	request.open('GET', 'https://restcountries.eu/rest/v2/name/' + country);
	request.send();

	request.addEventListener('load', function () {
		// this keyword here refers to request object
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const html = `
        <article class="country">
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
	});
};

getCountryData('Maldives');
getCountryData('Singapore');
getCountryData('usa');
