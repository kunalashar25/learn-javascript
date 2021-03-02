const populations = [3500, 1600, 153];

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

console.log(percentages3); // (3) [44.303797468354425, 20.253164556962027, 1.9367088607594938]