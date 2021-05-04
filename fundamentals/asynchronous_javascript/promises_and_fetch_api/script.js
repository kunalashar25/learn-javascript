'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// public api repository
// https://github.com/public-apis/public-apis

// promises are used to escape callback hell
// we use fetch api as a modern way of making the api calls

const request = fetch('https://restcountries.eu/rest/v2/name/canada');
console.log(request); // Promise {<pending>}

// Promise is an object that is used as a placeholder for the future result of an asynchronous operation.
// Simple meaning, promise is a container for a future value

// By using promises, we no longer need to depend on events and callbacks passed in the async functions.
// events and callback functions can sometime result is an unpredicted results.

// We can chain promises for a sequence of async operations.

// PROMISE LIFECYCLE
// Promises are time sensitive and they change overtime, so they can be in different states

// State 1: Pending
// before any value resulting from the async task is available
// during this time the asyc task is still working in the background

// State 2: Settled
// when async task finishes
// There are 2 different types of Settled Promises

// State 2.1: Fulfilled Promises
// Resulted in a success value as we expected

// State 2.2: Rejected Promises
// Resulted in error during an async task

// Promise is only settled once. So they state remains unchanged forever.
// Refer /concept_images/asynchronous_js/promise_lifecycle.png
