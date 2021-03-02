let rep = 1;
while (rep <= 10) {
    console.log(`Current Rep: ${rep}`);
    rep++;
}

// roll a dice
let dice = Math.trunc(Math.random() * 6);

while (dice !== 6) {
    console.log(`You Rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6);
}
