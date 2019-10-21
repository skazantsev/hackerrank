// https://www.hackerrank.com/challenges/camelcase/problem
function solve(s) {
    let ans = 1;
    const min = 'A'.charCodeAt(0);
    const max = 'Z'.charCodeAt(0);
    for (let i = 0; i < s.length; ++i) {
        const ch = s[i].charCodeAt(0);
        if (min <= ch && ch <= max) ans++;
    }
    return ans;
}

function main(lines) {
    const ans = solve(lines[0]);
    console.log(ans);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
