// https://www.hackerrank.com/challenges/absolute-permutation/problem
function solve(n, k) {
    if (k != 0 && (n % k != 0 || (n / k) % 2 != 0)) return [-1];
    
    const ans = new Array(n);
    let flag = false;
    for (let i = 0; i < n; ++i) {
        if (i % k == 0) flag = !flag;
        ans[i] = flag ? i + 1 + k : i + 1 - k
    }
    return ans;
}

function main(lines) {
    const cases = read(lines);
    const ans = cases.map(c => solve(c[0], c[1])).forEach(a => console.log(a.join(' ')));
}

function read(lines) {
    const t = parseInt(lines[0], 10);
    const cases = [];
    for (let i = 1; i <= t; ++i) {
        cases.push(lines[i].split(' ').map(x => parseInt(x, 10)));
    }
    return cases;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
