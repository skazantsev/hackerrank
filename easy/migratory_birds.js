// https://www.hackerrank.com/challenges/migratory-birds/problem
function solve(arr) {
    const s = [0, 0, 0, 0, 0];
    for (let t of arr) {
        s[t - 1]++;
    }
    let max = Math.max(...s);
    for (let i = 0; i < s.length; ++i) {
        if (s[i] == max)
            return i + 1;
    }
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans);
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
