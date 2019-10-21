// https://www.hackerrank.com/challenges/plus-minus/problem

function solve(arr) {
    const counts = [0, 0, 0];
    for (let x of arr) {
        if (x > 0) {
            counts[0]++;
        } else if (x < 0) {
            counts[1]++;
        } else {
            counts[2]++;
        }
    }
    const ans = [];
    for (let i = 0; i < counts.length; ++i) {
        ans[i] = counts[i] / arr.length;
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    for (let a of ans) {
        console.log(a);
    }
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
