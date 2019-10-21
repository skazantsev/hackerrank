// https://www.hackerrank.com/challenges/find-digits/problem
function solve(num) {
    let ans = 0;
    let t = num;
    while (t > 0) {
        const d = t % 10;
        if (d != 0) {
            if (num % d == 0) { ans++; }
        }

        t = Math.floor(t / 10);
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = arr.map(solve);
    console.log(ans.join('\n'));
}

function read(lines) {
    const arr = [];
    for (let i = 1; i < lines.length; ++i) {
        arr.push(parseInt(lines[i], 10));
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
