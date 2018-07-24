//BAR X slots game
//https://github.com/undercoder1/snippets

var cih = 100;
var credit = 0;
var reels = [];
reels[0] = ['X', 'O', 'X', 'B', 'O', 'X', 'X', 'B', 'O'];
function reelSymbol(symbol) {
	if (symbol == 'B') {
		return '[BAR]';
	} else {
		return ' [' + symbol +'] ';
	}
}

function line(sym1, sym2, sym3, winline) {
	const line = reelSymbol(sym1) + '|' + reelSymbol(sym2) + '|' + reelSymbol(sym3)
	if (winline) {
		return '>>' + line + '<<';
	} else {
		return '  ' + line;
	}
}
function spin() {
    process.stdout.write(line('X', 'B', 'O') + "\n");
    process.stdout.write(line('B', 'O', 'X') + "\n");
    process.stdout.write(line('B', 'X', 'X', true) + "\n");
    process.stdout.write(line('O', 'O', 'X') + "\n");
    process.stdout.write(line('B', 'B', 'X') + "\n");
    process.stdout.write("\n");
}
function spinXXXX() {
    var moves = 0;
    var P = ["B", "O", "X"];
    var x = 0;
    var intervalID = setInterval(function () {
        ++moves;
        process.stdout.write("\r" + reelSymbol(P[x++]));
        if (x==P.length) {x=0};
        if (++moves === 20) {
            clearInterval(intervalID);
        }
    }, 100);
}
function listen() {
    const readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', (str, key) => {
        if ((key.meta && key.name === 'escape') || (key.ctrl && key.name === 'c')) {
            process.exit();
        }
        if (!key.meta && !key.ctrl && !key.shift) {
            // process.stdout.write(key.name);
            switch (key.name) {
                case '1':
                    process.stdout.write('Reel 1 Hold/Nudge pressed');
                    break;
                case '2':
                    process.stdout.write('Reel 2 Hold/Nudge pressed');
                    break;
                case '3':
                    process.stdout.write('Reel 3 Hold/Nudge pressed');
                    break;
                case 's':
                    process.stdout.write('Start pressed');
                    break;
            }
        }
    });
}
function keyboardCommandList() {
    process.stdout.write('Keyboard Commands\n');
    process.stdout.write('-----------------\n');
    process.stdout.write('s - Start\n');
    process.stdout.write('Esc - End Game\n');
    process.stdout.write('1 - Hold/Nudge Reel 1\n');
    process.stdout.write('2 - Hold/Nudge Reel 2\n');
    process.stdout.write('3 - Hold/Nudge Reel 3\n');
}

function status() {
    process.stdout.write('Coins in hand: ' + cih + "\n");
    process.stdout.write('Credit: ' + credit + " coins\n");
    process.stdout.write("\n");
}

function init() {
    process.stdout.write('\x1Bc'); // Clear screen
    status();
    spin();
    keyboardCommandList();
    listen();
}

function insertCoin() {
    
}
init();
