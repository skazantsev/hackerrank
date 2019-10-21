// https://www.hackerrank.com/challenges/picking-numbers/problem

// we can solve it by sorting the array first and then creating an array of counts for each number
// the answer is MAX(a[i], a[i + 1])
// since N <= 100 we can use the approach similar to the counting sort

const MAX_N = 100;

function solve(arr) {
    const counts = new Array(MAX_N + 1);
    counts.fill(0);

    for (let n of arr) {
        counts[n]++;
    }

    let ans = 0;
    for (let i = 0; i < counts.length - 1; ++i) {
        const s = counts[i] + counts[i + 1];
        if (s > ans) {
            ans = s;
        }
    }

    return ans;
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
