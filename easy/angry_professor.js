// https://www.hackerrank.com/challenges/angry-professor/problem
function solve(arr, t) {
    return arr.filter(x => x <= 0).length < t;
}

function main(lines) {
    const arr = read(lines);
    const ans = arr.map(x => solve(x.arrivals, x.threshold));
    console.log(ans.map(x => x ? 'YES' : 'NO').join('\n'));
}

function read(lines) {
    const arr = [];
    for (let i = 1; i < lines.length; i += 2) {
        arr.push({
            threshold: lines[i].split(' ').map(x => parseInt(x, 10))[1],
            arrivals: lines[i + 1].split(' ').map(x => parseInt(x, 10))
        });
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
