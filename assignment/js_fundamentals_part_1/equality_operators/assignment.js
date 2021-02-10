const numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1)
    console.log('Only 1 border!');
else if (numNeighbours > 1)
    console.log('More than 1 border!');
else
    console.log('No border!');

const newNum = Number(numNeighbours);
if (newNum === 1)
    console.log('Only 1 border!');
else if (newNum > 1)
    console.log('More than 1 border!');
else
    console.log('No border!');