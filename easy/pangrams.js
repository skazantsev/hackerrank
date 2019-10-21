// https://www.hackerrank.com/challenges/pangrams/problem
function solve(str) {
    const map = new Map();
    for (let c of str.toLowerCase()) {
        map.set(c, true);
    }

    for (let c of 'abcdefghijklmnopqrstuvwxyz') {
        if (!map.has(c))
            return false;
    }
    return true;
}

function main(lines) {
    const ans = solve(lines[0]);
    console.log(ans ? 'pangram' : 'not pangram');
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
