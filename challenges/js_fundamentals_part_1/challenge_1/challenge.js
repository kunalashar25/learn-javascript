const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log('Mark BMI: ' + markBMI); // Mark BMI: 27.309968138370508
console.log('John BMI: ' + johnBMI); // John BMI: 24.194608809993426

const markHigherBMI = markBMI > johnBMI;
console.log('Is BMI Higher than John? ' + markHigherBMI); // Is BMI Higher than John? true


