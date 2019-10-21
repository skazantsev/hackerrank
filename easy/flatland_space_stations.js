// https://www.hackerrank.com/challenges/flatland-space-stations/problem
function solve(n, arr) {
    arr.sort((x, y) => x - y);

    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        const dist = Math.floor((arr[i] - arr[i - 1]) / 2);
        if (dist > max) { max = dist; }
    }

    return Math.max(max, n - arr[arr.length - 1] - 1);
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.n, data.arr);
    console.log(ans);
}

function read(lines) {
    return {
        n: parseInt(lines[0].split(' ')[0], 10),
        arr: lines[1].split(' ').map(x => parseInt(x, 10))
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
