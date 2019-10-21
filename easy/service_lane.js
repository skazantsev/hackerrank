// https://www.hackerrank.com/challenges/service-lane/problem
function solve(arr, start, stop) {
    let ans = null;
    for (let i = start; i <= stop; ++i) {
        if (ans == null || arr[i] < ans) {
            ans = arr[i];
        }
    }
    return ans;
}

function main(lines) {
    const data = read(lines);
    const ans = data.segments.map(s => solve(data.arr, s[0], s[1]));
    console.log(ans.join('\n'));
}

function read(lines) {
    const [n, t] = lines[0].split(' ').map(x => parseInt(x, 10));
    const arr = lines[1].split(' ').map(x => parseInt(x, 10));
    const segments = [];
    for (let i = 0; i < t; ++i) {
        segments.push(lines[i + 2].split(' ').map(x => parseInt(x, 10)));
    }
    return {
        arr: arr,
        segments: segments
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
