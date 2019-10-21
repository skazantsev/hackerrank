// https://www.hackerrank.com/challenges/save-the-prisoner/problem
function solve(n, m, s) {
    return (s + m - 2) % n + 1;
}

function main(lines) {
    const cases = read(lines);
    const ans = cases.map(arr => {
        const [n, m, s] = arr;
        return solve(n, m, s);
    });
    console.log(ans.join('\n'));
}

function read(lines) {
    const cases = [];
    for (let i = 1; i < lines.length; ++i) {
        cases.push(lines[i].split(' ').map(x => parseInt(x, 10)));
    }
    return cases;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
