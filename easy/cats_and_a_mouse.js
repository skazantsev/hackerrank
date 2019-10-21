// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
function solveAndPrint(x, y, z) {
    const dx = Math.abs(x - z);
    const dy = Math.abs(y - z);
    if (dx < dy) {
        console.log('Cat A');
    } else if (dy < dx) {
        console.log('Cat B');
    } else {
        console.log('Mouse C');
    }
}

function main(lines) {
    const data = read(lines);
    for (let arr of data) {
        solveAndPrint(arr[0], arr[1], arr[2]);
    }
}

function read(lines) {
    const data = [];
    for (let i = 1; i < lines.length; ++i) {
        data.push(
            lines[i].split(' ').map(x => parseInt(x, 10))
        );
    }
    return data;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
