// https://www.hackerrank.com/challenges/strange-advertising/problem
function solve(n) {
    let k = 5;
    let ans = 0;
    for (i = 1; i <= n; ++i) {
        const likedThisDay = Math.floor(k / 2);
        ans += likedThisDay;
        k = likedThisDay * 3;
    }
    return ans;
}

function main(lines) {
    const n = read(lines);
    const ans = solve(n);
    console.log(ans);
}

function read(lines) {
    return parseInt(lines[0], 10);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
