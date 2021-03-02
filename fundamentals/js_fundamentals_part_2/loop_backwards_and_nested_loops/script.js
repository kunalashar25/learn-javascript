const jonas = [
    'Jonas',
    'Test',
    2021 - 1991,
    'teacher',
    ['Michael', 'Kelvin', 'Peter']
];

// for loop in backwards order
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

// Nested for loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Current Exercise ${exercise}`);

    for (let rep = 1; rep < 5; rep++) {
        console.log(`Current Rep: ${rep}`);
    }
}