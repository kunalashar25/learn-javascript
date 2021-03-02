// assigning function to property key
const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,
    // first way - w/ function parameter
    calcAge: function (birthYear) {
        return 2021 - birthYear;
    },

    // second way - w/o passing function parameter
    calcAge2: function () {
        console.log(this); // {firstName: "Jonas", birthYear: 1991, calcAge: ƒ, calcAge2: ƒ}
        return 2021 - this.birthYear;
    },

    // third way - creating age property and storing value in it.
    calcAge3: function () {
        this.age = 2021 - this.birthYear;
    }
};

console.log(jonas); // {firstName: "Jonas", birthYear: 1991, calcAge: ƒ, calcAge2: ƒ}
console.log(jonas.calcAge(jonas.birthYear)); // 30
console.log(jonas.calcAge2()); // 30

jonas.calcAge3();
console.log(jonas.age); // 30

