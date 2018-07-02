//fortnite battle royal simulator
//https://github.com/undercoder1/snippets

const fortniteBegin = [
	"Start Game",
	"Board battle bus",
	"Jump",
	"Deploy glider",
	"Land"
];

const fortniteTasks = [
	"Hunt for chest",
	"Smash buildings",
	"Hide",
	"Drink shield potion",
	"Apply bandages",
	"Get to eye of storm",
	"Kill a player",
	"Build shelter",
	"Die"
];

const fortniteEnd = [
	"Game Over"
];

let killCount = 0;
function startGame() {
	for (event = 0; event < fortniteBegin.length; event++) {
		console.log(fortniteBegin[event]);
	}
}
function playGame() {
	let item="";
	while (item != "Die") {
		item = fortniteTasks[Math.floor(Math.random()*fortniteTasks.length)];
		console.log(item);
		if (item == "Kill a player") { ++killCount;}
	}
	endGame();
}

function endGame() {
	for (event = 0; event < fortniteEnd.length; event++) {
		console.log(fortniteEnd[event]);
		console.log(`Your Kill Count is ${killCount}`)
	}
	process.exit();
}
startGame();
playGame();
