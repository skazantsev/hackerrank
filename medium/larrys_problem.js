// https://www.hackerrank.com/challenges/larrys-array/problem
function solve(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j])
                sum++;
        }
    }
    return sum % 2 == 0;
}

function main(lines) {
    const cases = read(lines);
    const ans = cases
        .map(x => solve(x))
        .forEach(r => console.log(r ? 'YES' : 'NO'));
}

function read(lines) {
    let cur_line = 0;
    const t = parseInt(lines[cur_line], 10);
    const cases = [];
    for (let i = 0; i < t; ++i) {
        cur_line += 2;
        cases.push(lines[cur_line].split(' ').map(x => parseInt(x, 10)));
    }
    return cases;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
