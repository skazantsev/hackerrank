// https://www.hackerrank.com/challenges/counting-valleys/problem
function solve(arr) {
    let ans = 0;
    let current_level = 0;
    for (let s of arr) {
        if (s) {
            current_level++;
        } else {
            if (current_level == 0) {
                ans++;
            }
            current_level--;
        }
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans);
}

function read(lines) {
    return lines[1].split('').map(x => x == 'U' ? true : false);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
