const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);

console.log(dolphinsAverage, koalasAverage); // 60 28

function checkWinner(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= 2 * koalasAverage)
        console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`)
    else if (koalasAverage >= 2 * dolphinsAverage)
        console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`)
    else
        console.log('No team wins!');
}

checkWinner(dolphinsAverage, koalasAverage); // Dolphins win(60 vs. 28)