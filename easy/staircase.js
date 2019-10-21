// https://www.hackerrank.com/challenges/staircase/problem

// no additional allocations
function printStaircase(size) {
    let sharp = '#';
    let space = ' ';
    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size - 1 - i; ++j) {
            process.stdout.write(space);
        }
        for (let j = 0; j < i + 1; ++j) {
            process.stdout.write(sharp);
        }
        process.stdout.write('\n');
    }
}

function main(lines) {
    const size = read(lines);
    printStaircase(size);
}

function read(lines) {
    return parseInt(lines[0], 10);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
