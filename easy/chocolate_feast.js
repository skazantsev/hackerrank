// https://www.hackerrank.com/challenges/chocolate-feast/problem
function solve(n, c, m) {
    let ans = Math.floor(n / c);
    let wrappers = ans;
    while (wrappers > 0) {
        const exchanged = Math.floor(wrappers / m);
        if (exchanged === 0)
            break;
        ans += exchanged;
        wrappers = wrappers % m;
        wrappers += exchanged;
    }
    return ans;
}

function main(lines) {
    const cases = read(lines);
    const ans = cases.map(arr => solve(arr[0], arr[1], arr[2]));
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
