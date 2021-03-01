function calcTip(billAmount) {
    return billAmount >= 50 && billAmount <= 300 ? (billAmount * 0.15) : (billAmount * 0.20);;
}

console.log(calcTip(1000));

const bills = [100, 500, 325.65];
console.log(bills); // (3) [100, 500, 325.65]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); // (3) [15, 100, 65.13]

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); // (3) [115, 600, 390.78]