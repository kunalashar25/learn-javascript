let country = 'India';
let continent = 'Asia';
let population = 1381.59;
const language = 'Hindi';

// each half
console.log(population / 2); // 690.795

// increase population by 1
const increasedPopulation = population * 1000000 + 1;
console.log(increasedPopulation); // 1381590001

const finlandPopulation = 6000000;
console.log(increasedPopulation > finlandPopulation); // true

const averageCountryPopulation = 33000000;
console.log(increasedPopulation < averageCountryPopulation); // false

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description); // India is in Asia, and its 1381.59 million people speak Hindi
