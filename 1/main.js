const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n');

const sumsSorted = input
	.map((elf) => {
		return elf
			.split('\n')
			.map((item) => parseInt(item, 10))
			.reduce((sum, v) => sum + v, 0);
	})
	.sort((a, z) => z - a);

console.log(
	'Part One:',
    sumsSorted[0]
);
console.log(
	'Part Two:',
	sumsSorted.slice(0, 3).reduce((sum, v) => sum + v, 0)
);
