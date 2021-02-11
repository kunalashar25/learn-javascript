const billAmount = 500;
const tip = billAmount >= 50 && billAmount <= 300 ? (billAmount * 15) / 100 : (billAmount * 20) / 100;

console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value ${billAmount + tip}`);

// The bill was 350, the tip was 70, and the total value 420
// The bill was 30, the tip was 6, and the total value 36
// The bill was 500, the tip was 100, and the total value 600