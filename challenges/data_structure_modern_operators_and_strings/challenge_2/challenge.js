'use strict';
// Football Betting application
const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// 1. loop and print goal scored
const game_scored = Object.entries(game.scored);
for (const [index, name] of game_scored) {
	const goal_number = Number(index) + 1;
	console.log(`Goal ${goal_number}: ${name}`);
	//console.log(`Goal ${goal_number + 1}: ${name}`);
}
// Goal 1: Lewandowski
// Goal 2: Gnarby
// Goal 3: Lewandowski
// Goal 4: Hummels

// 2. calculate average odds
const odd = Object.values(game.odds);
let sum = 0;

for (const o of odd) {
	sum += o;
}

console.log('Average odd is ' + sum / odd.length);
// Average odd is 3.6933333333333334

// 3. print odds in formatted way
const teamOdds = Object.entries(game.odds);
console.log(teamOdds);

for (const [teamName, teamOdd] of teamOdds) {
	const name = game[teamName];
	const print = name ? `victory ${name}` : 'draw';
	console.log(`Odd of ${print} : ${teamOdd}`);
}
// Odd of victory Bayern Munich : 1.33
// Odd of draw : 3.25
// Odd of victory Borrussia Dortmund : 6.5

// 4. Bonus - create scores object
const scorers = {};

for (const [, name] of game_scored) {
	scorers[name] ? (scorers[name] = scorers[name] + 1) : (scorers[name] = 1);
}
console.log(scorers);
// {Lewandowski: 2, Gnarby: 1, Hummels: 1}
