// A function is a piece of code that we can re-use over an over again

function logger() {
    console.log('Test Log');
}

// Invoking, Running, or Calling a Function
logger();

// Passing data to a function
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Making juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juice1 = fruitProcessor(5, 8); // 5 8
console.log(juice1); // Making juice with 5 apples and 8 oranges

const juice2 = fruitProcessor(3, 9); // 3 9
console.log(juice2); // Making juice with 3 apples and 9 oranges