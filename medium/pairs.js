// https://www.hackerrank.com/challenges/pairs/problem
function solve(arr, k) {
    let ans = 0;
    const map = new Map();
    for (let x of arr) {
        if (map.has(x - k)) {
            ans += map.get(x - k);
        }
        if (map.has(x + k)) {
            ans += map.get(x + k);
        }
        map.set(x, (map.get(x) || 0) + 1);
    }
    return ans;
}

function main(lines) {
    const {arr, k} = read(lines);
    const ans = solve(arr, k);
    console.log(ans);
}

function read(lines) {
    return {
        arr: lines[1].split(' ').map(x => parseInt(x, 10)),
        k: parseInt(lines[0].split(' ')[1])
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
