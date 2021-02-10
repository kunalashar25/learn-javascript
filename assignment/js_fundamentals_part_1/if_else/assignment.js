let country = 'India';
let continent = 'Asia';
let population = 0.59;

const averagePopulation = 33;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`) // India's population is above average.
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average.`) // India's population is 32.41 below average.
}