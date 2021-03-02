const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    population: 1500,
    neighbours: ['Nepal', 'Bhutan'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};

console.log(myCountry.describe()); // India has 1500 million Hindi-speaking people, 2 neighbouring countries and a capital called New Delhi.

if (myCountry.isIsland)
    console.log('No Neighbouring countries');
else
    console.log('Neighbouring countries are ' + myCountry.neighbours);

// Neighbouring countries are Nepal,Bhutan