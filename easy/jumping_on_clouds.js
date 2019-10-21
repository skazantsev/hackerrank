// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
function solve(arr, k) {
    let level = 100;
    let index = 0;
    do {
        --level;
        index = (index + k) % arr.length;
        if (arr[index]) {
            level -= 2;
        }
    } while (index != 0);
    return level;
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
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
