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

// player array for each team
const [players1, players2] = game.players;
console.log(players1, players2);
// (11) ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
// (11) ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]

// goal keeper and remaining players
const [gk, ...fieldPlayers] = players1;
console.log(gk); // Neuer
console.log(fieldPlayers); // (10) ["Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]

// all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// (22) ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]

// Substiture Players for team 1
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// (14) ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Thiago", "Coutinho", "Perisic"]

// Odds
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2); // 1.33 3.25 6.5

// function to print goals
const printGoals = function (...playerNames) {
	for (let i = 0; i < playerNames.length; i++) {
		console.log(playerNames[i] + ' : ' + playerNames.length);
	}
};

printGoals('Burki', 'Akanji', 'Kimmich');
// Burki : 3
// Akanji : 3
// Kimmich : 3

printGoals(...game.scored);
// Lewandowski : 4
// Gnarby : 4
// Lewandowski : 4
// Hummels : 4

// likely to win
team1 < team2 && console.log('Team1 will win');
team2 < team1 && console.log('Team2 will win');
// Team1 will win
