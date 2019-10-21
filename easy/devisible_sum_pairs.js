// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function solve(arr, k) {
    let ans = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if ((arr[i] + arr[j]) % k == 0) ans++;
        }
    }
    return ans;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.arr, data.k);
    console.log(ans);
}

function read(lines) {
    return {
        k: lines[0].split(' ').map(x => parseInt(x, 10))[1],
        arr: lines[1].split(' ').map(x => parseInt(x, 10))
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
