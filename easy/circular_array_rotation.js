// https://www.hackerrank.com/challenges/circular-array-rotation/problem
function solve(k, arr, queries) {
    const n = arr.length;
    return queries.map(x => arr[((n - k % n) + x) % n]);
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.k, data.arr, data.queries);
    console.log(ans.join('\n'));
}

function read(lines) {
    const k = lines[0].split(' ').map(x => parseInt(x, 10))[1];
    const arr = lines[1].split(' ').map(x => parseInt(x, 10));
    const queries = [];
    for (let i = 2; i < lines.length; ++i) {
        queries.push(parseInt(lines[i], 10));
    }
    return {
        k: k,
        arr: arr,
        queries: queries
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
