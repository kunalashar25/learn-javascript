const markMass = 78;
const markHeight = 2.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark'sBMI (${markBMI}) is higher than John's (${johnBMI})!`); // Mark'sBMI (27.309968138370508) is higher than John's (24.194608809993426)!
} else
    console.log(`John'sBMI (${johnBMI}) is higher than Mark's (${markBMI})!`); // John'sBMI (24.194608809993426) is higher than Mark's (10.77928718508589)!