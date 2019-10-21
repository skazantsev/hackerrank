// https://www.hackerrank.com/challenges/sock-merchant/problem
function solve(arr) {
    let s = new Array(Math.max(...arr));
    s.fill(0);

    for (let n of arr) {
        s[n - 1]++;
    }

    let ans = 0;
    for (let n of s) {
        if (n > 1)
            ans += Math.floor(n / 2);
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans);
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
