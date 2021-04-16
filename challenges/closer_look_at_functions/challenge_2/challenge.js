'use strict';

let change;
(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';
	change = function () {
		header.style.color = 'blue';
	};
})();

document.querySelector('body').addEventListener('click', change);
console.dir(change); // 0: Closure {header: h1}
