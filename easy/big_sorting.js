// https://www.hackerrank.com/challenges/big-sorting/problem
var BigNumber = require('bignumber.js');

function main(lines) {
    const arr = read(lines);
    arr.sort((x, y) => x.comparedTo(y));
    arr.forEach(x => console.log(x.toFixed()));
}

function read(lines) {
    const arr = [];
    for (let i = 1; i < lines.length; ++i) {
        arr.push(new BigNumber(lines[i]));
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
