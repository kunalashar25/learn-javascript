'use strict';

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `You're ${age}, born in ${birthYear}`;
    console.log(output); // You're 30, born in 1991
  }

  printAge();

  return age;
}

const firstName = 'Jonas';

calcAge(1991);
