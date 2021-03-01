const neighbours = ['Sri Lanka', 'Nepal', 'Bhutan'];
console.log(neighbours); // (3) ["Sri Lanka", "Nepal", "Bhutan"]

neighbours.push('Utopia');
console.log(neighbours); // (4) ["Sri Lanka", "Nepal", "Bhutan", "Utopia"]

neighbours.pop();
console.log(neighbours); // (3) ["Sri Lanka", "Nepal", "Bhutan"]

if (neighbours.includes('Germany'))
    console.log('Probably not a central European country ')

neighbours[neighbours.indexOf('Nepal')] = 'Friendly Nepal';
console.log(neighbours); // (3) ["Sri Lanka", "Friendly Nepal", "Bhutan"]
