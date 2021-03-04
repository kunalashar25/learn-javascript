function calcTip(billAmount) {
  return billAmount >= 50 && billAmount <= 300
    ? billAmount * 0.15
    : billAmount * 0.2;
}

const bills = [100, 500, 325.65, 450, 163, 10, 65, 32, 95];
console.log(bills); // (9) [100, 500, 325.65, 450, 163, 10, 65, 32, 95]

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(tips[i] + bills[i]);
}

console.log(tips); // (9) [15, 100, 65.13, 90, 24.45, 2, 9.75, 6.4, 14.25]
console.log(total); // (9) [115, 600, 390.78, 540, 187.45, 12, 74.75, 38.4, 109.25]

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const numbers = [1, 2, 3];
console.log(calcAverage(numbers)); // 2
