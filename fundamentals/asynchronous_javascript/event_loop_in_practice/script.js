'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
console.log('Test Start'); // synchronous call
setTimeout(() => console.log('0 sec timer'), 0); // asynchronous call
Promise.resolve('Promise 1').then(res => console.log(res)); // asynchronous call
Promise.resolve('Promise 2').then(res => {
	// adding for loop to make sure all events from microtasks are executed before callback queue events
	for (let i = 0; i < 1000; i++) {
		console.log(i);
	}
	console.log(res);
}); // asynchronous call
console.log('Test End'); // synchronous call

// First all synchronus tasks will be executed and then asynchronus
// Note, microtasks gets priority over callback queue
// Hence, Promise 1 is printed before 0 sec timer

// Output:
// Test Start
// Test End
// Promise 1
// 1 to 1000 will be printed
// Promise 2
// 0 sec timer
