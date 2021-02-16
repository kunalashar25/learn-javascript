const worldPopulation = 7900;

// Function Declaration
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const china = percentageOfWorld1(1441);
console.log(`China's population is ${china}% of world's population`);
// China's population is 18.240506329113924% of world's population

// Function Expression
const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

console.log(`China's population is ${percentageOfWorld2(1441)}% of world's population`);
// China's population is 18.240506329113924% of world's population