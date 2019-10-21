// https://www.hackerrank.com/challenges/strange-code/problem
function solve(t) {
    let cycle = 3;
    while (t > cycle) {
        t -= cycle;
        cycle *= 2;
    }
    return cycle - t + 1;
}

function main(lines) {
    const t = read(lines);
    const ans = solve(t);
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
