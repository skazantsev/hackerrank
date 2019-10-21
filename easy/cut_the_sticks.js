// https://www.hackerrank.com/challenges/cut-the-sticks/problem
function solve(arr) {
    arr.sort((x, y) => x - y);
    let num = arr.length;
    const ans = [num];
    let count = 1;
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] == arr[i + 1]) {
            count++;
        } else {
            num -= count;
            ans.push(num);
            count = 1;
        }
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans.join('\n'));
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
