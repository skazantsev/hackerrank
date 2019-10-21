// https://www.hackerrank.com/challenges/bon-appetit/problem
function solve(arr, exclude_index, charged) {
    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (i != exclude_index) total += arr[i];
    }

    return charged - (total / 2);
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.arr, data.exclude_index, data.charged);
    console.log(ans == 0 ? 'Bon Appetit' : ans);
}

function read(lines) {
    return {
        exclude_index: lines[0].split(' ').map(x => parseInt(x, 10))[1],
        arr: lines[1].split(' ').map(x => parseInt(x, 10)),
        charged: parseInt(lines[2], 10)
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
