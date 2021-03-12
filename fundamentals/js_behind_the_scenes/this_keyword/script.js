'use strict';
console.log(this); // window object in global scope
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); // global object in sloppy mode and undefined in strict mode
};

calcAge(1991);

// ---------------------------------------------------------------------------------------------------------------------------------

const calcAge2 = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); // global object in strict mode
  // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
};
// arrow function does not get own this keyowrd. It is using Lexical this keyword
calcAge2(1991);

// ---------------------------------------------------------------------------------------------------------------------------------

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object {year: 1991, calcAge: ƒ}
    console.log(2021 - this.year); // 30
  },
};

jonas.calcAge();

// ---------------------------------------------------------------------------------------------------------------------------------

const user = {
  year: 2021,
};

// method borrowing
user.calcAge = jonas.calcAge;
user.calcAge(); // {year: 2021, calcAge: ƒ}
