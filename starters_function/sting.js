
// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events
 that happened during the game. The values are the events themselves, and the keys are the minutes
  in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow 
card from minute 64 was unfair. So remove this event from the game events log.

3. Print the following string to the console: 
"An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether 
it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log("-----CodingChallenge3-------");
//Q1
const events = [...new Set (gameEvents.values())];
console.log(events);

for( const [key,value] of gameEvents){
	if(value=='🔶 Yellow card'){
		gameEvents.delete(key);
	}
}
console.log(gameEvents);


for( const [key,value] of gameEvents){
	if(key<=90){
		console.log(`An ${value} happened, on average, every 9 minutes`);
	}
}


for( const [key,value] of gameEvents){
	if(key<=45){
		console.log(`[First half] ${key} :: ${value}`);
	}else{
		console.log(`[Second half] ${key} :: ${value}`);
	}
}
console.log('/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/');
console.log('/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/');
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*------------------STRING-----------------*/
const airline =' dia';
const plan = 'A320'

console.log('B232'[0]);//--> will give b 
console.log('Bdkjfdk'.length);
console.log(plan.length);

console.log(airline.indexOf('r')); //->if not present gives -1
console.log(airline.lastIndexOf('r')); //->gives last index
console.log(airline.slice(4));


 
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
