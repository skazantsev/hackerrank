// https://www.hackerrank.com/challenges/manasa-and-stones/problem
function solve(n, a, b) {
    if (a == b) return [a * (n - 1)];
    let last = Math.min(a, b) * (n - 1);
    const max = Math.max(a, b) * (n - 1);
    const diff = Math.abs(a - b);

    const ans = [];
    while (last <= max) {
        ans.push(last);
        last += diff;
    }
    return ans;
}

function main(lines) {
    const cases = read(lines);
    const results = cases.map(x => solve(x.n, x.a, x.b));
    results.map(x => x.join(' ')).forEach(x => console.log(x));
}

function read(lines) {
    const t = parseInt(lines[0], 10);
    const cases = [];
    for (let i = 0; i < t; ++i) {
        cases.push({
            n: parseInt(lines[i * 3 + 1], 10),
            a: parseInt(lines[i * 3 + 2], 10),
            b: parseInt(lines[i * 3 + 3], 10)
        });
    }

    return cases;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
