'use strict';

const poll = {
	question: 'What is your favourite programming language?',
	options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
	// This generates [0, 0, 0, 0]. More in the next section!
	answers: new Array(4).fill(0),

	// 1. register answer
	registerNewAnswer: function () {
		displayPrompt();

		// 4 run display result
		displayResult('string');
		displayResult('array');
	},
};

// 1.1 generate prompt
const displayPrompt = function () {
	const answer = Number(
		prompt(poll.question + '\n' + poll.options.join('\n'))
	);
	updateArray(answer);
};

// 1.2 update answer
const updateArray = answer => {
	answer >= 0 && answer < poll.answers.length && poll.answers[answer]++;
};

// 2 call when user clicks on answer poll button
document
	.querySelector('.poll')
	.addEventListener('click', poll.registerNewAnswer);

// 3 display poll result
const displayResult = type => {
	if (type === 'array') {
		console.log(poll.answers);
	} else if (type === 'string') {
		console.log(`Poll results are ${poll.answers.join(', ')}`);
	}
};
