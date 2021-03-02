function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitsInPieces(apples);
    const orangePieces = cutFruitsInPieces(oranges);

    const juice = `Making juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

function cutFruitsInPieces(fruit) {
    return fruit * 4;
}

console.log(fruitProcessor(2, 3)); // Making juice with 8 apples and 12 oranges