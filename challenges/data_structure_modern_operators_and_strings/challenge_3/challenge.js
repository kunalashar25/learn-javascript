'use strict';

const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

console.log(gameEvents);
// Map(11) {17 => "⚽ GOAL", 36 => "🔁 Substitution", 47 => "⚽ GOAL", 61 => "🔁 Substitution", 64 => "🔶 Yellow card", …}

// 1. get unique events
const events = [...new Set(gameEvents.values())];
console.log(events);
// (4) ["⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card"]

// 2. removed incorrect event
gameEvents.delete(64);
console.log(gameEvents);
// Map(10) {17 => "⚽ GOAL", 36 => "🔁 Substitution", 47 => "⚽ GOAL", 61 => "🔁 Substitution", 69 => "🔴 Red card", …}

// 3. average event time
const max_game_time = 90;
console.log(
	`An event happened, on average, every ${
		max_game_time / gameEvents.size
	} minutes`
);
// An event happened, on average, every 9 minutes

// 4. first half vs second half
const half_time = 45;
for (const [key, value] of gameEvents) {
	const duration = key < half_time ? '[FIRST HALF]' : '[SECOND HALF]';
	console.log(`${duration} ${key}: ${value}`);
}

// [FIRST HALF] 17: ⚽ GOAL
// [FIRST HALF] 36: 🔁 Substitution
// [SECOND HALF] 47: ⚽ GOAL
// [SECOND HALF] 61: 🔁 Substitution
// [SECOND HALF] 69: 🔴 Red card
// [SECOND HALF] 70: 🔁 Substitution
// [SECOND HALF] 72: 🔁 Substitution
// [SECOND HALF] 76: ⚽ GOAL
// [SECOND HALF] 80: ⚽ GOAL
// [SECOND HALF] 92: 🔶 Yellow card
