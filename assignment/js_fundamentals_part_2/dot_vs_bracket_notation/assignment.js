const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    population: 1500,
    neighbours: ['Nepal', 'Bhutan']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
// India has 1500 million Hindi-speaking people, 2 neighbouring countries and a capital called New Delhi.

myCountry.population = myCountry.population + 2;
console.log('Updated Population: ' + myCountry.population); // Updated Population: 1502

myCountry['population'] = myCountry['population'] - 5;
console.log('Updated Population: ' + myCountry['population']); // Updated Population: 1497
