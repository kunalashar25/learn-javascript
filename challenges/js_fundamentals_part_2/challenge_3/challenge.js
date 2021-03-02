const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 2.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

console.log(mark.calcBMI()); // 10.77928718508589
console.log(john.calcBMI()); // 24.194608809993426

if (mark.bmi > john.bmi)
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
else
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// John's BMI (24.194608809993426) is higher than Mark's (10.77928718508589)!