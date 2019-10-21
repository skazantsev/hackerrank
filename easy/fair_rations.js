// https://www.hackerrank.com/challenges/fair-rations/problem
function solve(arr) {
    let ans = 0;
    let last_odd_index = null;
    for (let i = 0; i < arr.length; ++i)  {
        if (arr[i] % 2 === 1) {
            if (last_odd_index == null) {
                last_odd_index = i;
            } else {
                ans += (i - last_odd_index) * 2;
                last_odd_index = null;
            }
        }
    }

    return last_odd_index == null ? ans : -1;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans === -1 ? "NO" : ans);
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
