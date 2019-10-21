// https://www.hackerrank.com/challenges/repeated-string/problem
function solve(s, n) {
    if (n <= s.length) {
        let ans = 0;
        for (let i = 0; i < n; ++i) {
            if (s[i] == 'a') ans++;
        }
        return ans;
    }

    let sum_s = s.split('').reduce((r, x) => x == 'a' ? r + 1 : r, 0);
    let ans = sum_s * Math.floor(n / s.length);
    for (let i = 0; i < n % s.length; ++i) {
        if (s[i] == 'a') ans++;
    }
    return ans;
}

function main(lines) {
    const ans = solve(lines[0], parseInt(lines[1], 10));
    console.log(ans);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
