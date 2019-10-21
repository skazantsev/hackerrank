// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
function solve(arr) {
    const max = Math.max(...arr);
    let ans = 0;
    for (let n of arr) {
        if (n === max)
            ans++;
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const res = solve(arr);
    console.log(res);
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
