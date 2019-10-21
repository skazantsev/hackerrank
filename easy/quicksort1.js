// https://www.hackerrank.com/challenges/quicksort1/problem
// Lomuto's partition
function solve(arr) {
    const pivot = arr[0];
    let i = 0;
    for (let j = i + 1; j < arr.length; ++j) {
        if (arr[j] < pivot) {
            ++i;
            if (i != j) { __swap(arr, i, j); }
        }
    }
    __swap(arr, 0, i);
}

function __swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function main(lines) {
    const arr = read(lines);
    solve(arr);
    console.log(arr.join(' '));
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
