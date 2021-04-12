'use strict';

// function that disappears right after it is called once
// will be useful when we learn about asyc await

const runOnce = function () {
	console.log('This will never run again');
};

runOnce(); // but we can still call this multiple times.

// We need a solution where we do not need to call.
// It should automatically trigger just once and never to be called

// Converting entire function into an expression by wrapping ().
// Else JS will throw an error
(function () {
	console.log('This will never run again');
})(); // adding () to call the function

// this pattern is called IIFE

// same would work for arrow functions
(() => console.log('This will never run again'))();
