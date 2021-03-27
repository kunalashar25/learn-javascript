'use strict';

const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+')); // Array(4)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
	const [status, from, to, time] = flight.split(';');

	const output = `${status.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
		to
	)} ${time.replace(':', 'h') + ''}`;
	console.log(output.padStart(40));
}

// Delayed Departure FAO TXL 11h25
// Arrival BRU FAO 11h45
// Delayed Arrival HEL FAO 12h05
// Departure FAO LIS 12h30
