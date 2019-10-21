// https://www.hackerrank.com/challenges/two-characters/problem
function solve(str) {
    const chars = [...new Set(str)];

    let ans = 0;
    for (let i = 0; i < chars.length; ++i) {
        for (let j = i + 1; j < chars.length; ++j) {
            let s = [];
            for (let x of str) {
                if (x == chars[i] || x == chars[j]) {
                    s.push(x);
                }
            }
            if (s.length > ans && isValid(s)) {
                ans = s.length;
            }
        }
    }

    return ans;
}

function isValid(str) {
    if (str.length < 2) return false;

    for (let i = 0; i < str.length - 1; ++i) {
        if (str[i] == str[i + 1])
            return false;
    }
    return true;
}

function main(lines) {
    console.log(solve(lines[1].split('')));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
