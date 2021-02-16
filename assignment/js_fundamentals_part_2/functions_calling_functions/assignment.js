const worldPopulation = 7900;

function describePopulation(country, population) {
    const percentage = percentageOfWorld(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

function percentageOfWorld(population) {
    return (population / worldPopulation) * 100;
}

console.log(describePopulation('Russia', 103)); // Russia has 103 million people, which is about 1.3037974683544304% of the world.