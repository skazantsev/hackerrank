// https://www.hackerrank.com/challenges/grading/problem
function solve(arr) {
    const ans = [];
    for (let num of arr) {
        const remainder = num % 5;
        if (remainder > 2 && num >= 38) {
            num += 5 - remainder;
        }
        ans.push(num);
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const res = solve(arr);
    console.log(res.join('\n'));
}

function read(lines) {
    const size = lines[0].split(' ').map(x => parseInt(x, 10));
    const arr = [];
    for (let i = 1; i <= size; ++i) {
        arr.push(parseInt(lines[i], 10));
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
