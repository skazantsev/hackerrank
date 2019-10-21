// https://www.hackerrank.com/challenges/permutation-equation/problem
function solve(arr) {
    const t = [];
    for (let i = 0; i < arr.length; ++i) {
        t[arr[i] - 1] = i + 1;
    }

    const ans = [];
    for (let i = 0; i < arr.length; ++i) {
        ans.push(t[t[i] - 1]);
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans.join('\n'));
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
