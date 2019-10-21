// https://www.hackerrank.com/challenges/reduced-string/problem
function solve(str) {
    while (true) {
        const res = [];
        for (let i = 0; i < str.length; ++i) {
            if (i == str.length - 1 || str[i] != str[i + 1]) {
                res.push(str[i]);
            } else {
                ++i;
            }
        }
        if (res.length === 0) {
            return 'Empty String';
        } else if (res.length == str.length) {
            return res.join('')
        } else {
            str = res.join('');
        }
    }
}

function main(lines) {
    console.log(solve(lines[0]));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
