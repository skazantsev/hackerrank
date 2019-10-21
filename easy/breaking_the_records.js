// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function solve(arr) {
    const ans = [0, 0];
    let min = arr[0];
    let max = arr[0];
    for (let n of arr) {
        if (n > max) {
            max = n;
            ans[0]++;
        }
        if (n < min) {
            min = n;
            ans[1]++;
        }
    }

    return ans;
}

function main(lines) {
    const arr = read(lines);
    const res = solve(arr);
    console.log(res.join(' '));
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
