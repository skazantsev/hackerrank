// https://www.hackerrank.com/challenges/countingsort1/problem
function solve(arr) {
    const counts = new Array(100);
    counts.fill(0);

    for (let x of arr) {
        counts[x]++;
    }

    return counts;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans.join(' '));
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
