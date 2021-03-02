// Special mode to activate is JS which helps us to write secure JS code
// Write below line to activate the mode for entire script
'use strict';

// 'use strict'; should be the very first statememt

// It is used to prevent accidental bugs into the code
// It creates visible error in developer console where JS would fail silently

let hasDriversLicense = false;
const passTest = true;

if (passTest)
    hasDriverLicense = true; // mistake in variable name

if (hasDriversLicense)
    console.log('Has a license!');

// Uncaught ReferenceError: hasDriverLicense is not defined at script.js:14
// We will not receieve this error if we do not write 'use strict'

// Strict Mode also introduce a short list of variables names that are reserved for features that might be added to the language later

const interface = 'Audio'; // Uncaught SyntaxError: Unexpected strict mode reserved word
const private = 123; // Uncaught SyntaxError: Unexpected strict mode reserved word