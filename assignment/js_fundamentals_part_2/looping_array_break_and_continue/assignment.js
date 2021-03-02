const worldPopulation = 1500;

const populations = [100, 150, 200, 300];
console.log(populations.length === 4); // true

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const percentages = [];
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));
}

console.log(populations, percentages);
// (4) [100, 150, 200, 300]
// (4) [6.666666666666667, 10, 13.333333333333334, 20] 