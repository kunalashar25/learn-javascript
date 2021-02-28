const worldPopulation = 1500;

const populations = [100, 150, 200, 300];
console.log(populations.length === 4); // true

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages); // (4) [6.666666666666667, 10, 13.333333333333334, 20]