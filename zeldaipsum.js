//Zelda Ipsum generator
//https://github.com/undercoder1/snippets


const genericWords = [
	"i", "a", "am", "and", "the", "this", "that", "it", "is"
];

const themeWords = [
	"link",	"zelda", "master", "sword", "shield", "hyrule",
	"rupie", "triforce", "castle", "goron", "ganon", "lynel",
	"bokoblin", "moblin", "chest", "compass", "map", "dungeon",
	"kill", "fire", "catapult", "poe", "zora", "guay", "octorok"
];

const allWords = genericWords.concat(themeWords);

allWords.sort(function(a, b){
  return a.length - b.length;
});

const shortestWordLength = allWords[0].length;
const longestWordLength = allWords[allWords.length -1].length;
const lexicon = {};
// console.log(allWords);
// console.log(shortestWordLength);
// console.log(longestWordLength);

for (word = 0; word < allWords.length; word++) {
	!([allWords[word].length] in lexicon) && (lexicon[allWords[word].length] = [])
	lexicon[allWords[word].length].push(allWords[word]);
}
//console.dir(lexicon);

function randomWord(wordLength) {
	return lexicon[wordLength][Math.floor(Math.random()*lexicon[wordLength].length)];
}
//console.log(randomWord(7));

//random sentence (5 words)
const sentenceStructure = [3,7,6,5,6];
function randomSentence(structure) {
	var sentence = "";
	for (word = 0; word < structure.length; word++) {
		sentence += randomWord(structure[word]);
		if (word == structure.length -1) {sentence += ".";} else {sentence += " ";}
	}
	return sentence;
}
//console.log(randomSentence(sentenceStructure));
const maxWords = 8;
const minWords = 3;
function sentenceLength(){
	return minWords + Math.floor(Math.random()*((maxWords-minWords)+1));
}

function buildSentence() {

	const structure = [...Array(sentenceLength())].map(()=>{return shortestWordLength+ Math.floor(Math.random()*((longestWordLength-shortestWordLength)+1))});
	return randomSentence(structure);
}

//console.log(buildSentence() + " " + buildSentence());

function buildParagraph(sentences) {
	var paragraph = "";
	for (sentence = 1; sentence <= sentences; sentence++) {
		paragraph += " " + buildSentence();
	}
	return paragraph;
}

console.log(buildParagraph(process.argv[2]));

