const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

console.log(dolphinsAverage, koalasAverage); // 97.66666666666667 96.33333333333333


if (dolphinsAverage > koalasAverage)
    console.log(`Dolphin's are winners!`)
else if (dolphinsAverage === koalasAverage)
    console.log(`It's a draw!`)
else
    console.log(`Koalas' are winners!`)

// Bonus 1
const dolphinsAverage1 = (97 + 112 + 101) / 3;
const koalasAverage1 = (109 + 95 + 123) / 3;

console.log(dolphinsAverage1, koalasAverage1); // 103.33333333333333 109


if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100)
    console.log(`Dolphin's are winners!`)
else if (dolphinsAverage1 === koalasAverage1)
    console.log(`It's a draw!`)
else
    console.log(`Koalas' are winners!`)
