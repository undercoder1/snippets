










// Wimbledon Matches

const players = {"Mens Singles": 128, "Ladies Singles": 128, "Mens Doubles": 64, "Ladies Doubles": 64, "Mixed Doubles" :64};

const matches = function(x) {return x-1;}

let totalMatches = 0;
for (matchType in players) {
	let matchesThisType = matches(players[matchType])
	totalMatches += matchesThisType;
    console.log(`${matchType} ${players[matchType]} players, ${matchesThisType} matches.`);
}
console.log(`Total Matches: ${totalMatches}`);