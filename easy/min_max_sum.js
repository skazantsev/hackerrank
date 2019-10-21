https://www.hackerrank.com/challenges/mini-max-sum/problem

function solve(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((s, x) => s + x, 0);
    return [sum - max, sum - min];
}

function main(lines) {
    const arr = read(lines);
    const res = solve(arr);
    console.log(res.join(' '));
}

function read(lines) {
    return lines[0].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
