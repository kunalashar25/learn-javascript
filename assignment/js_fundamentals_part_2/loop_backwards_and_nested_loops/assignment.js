const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);