'use strict';

const toCamelCase = function (names) {
	console.log(names);
	let i = 1;
	for (const n of names) {
		const words = n.trim().split('_');
		const camelCase = [
			words[0].toLowerCase(),
			words[1][0].toUpperCase(),
			words[1].slice(1).toLowerCase(),
		];
		console.log(camelCase.join('').padEnd(30, ' ') + '✅'.repeat(i++));
	}
};

toCamelCase([
	'underscore_case\n',
	' first_name\n',
	'Some_Varaible',
	'calculate_AGE',
]);

// underscoreCase                ✅
// firstName                     ✅✅
// someVaraible                  ✅✅✅
// calculateAge                  ✅✅✅✅
