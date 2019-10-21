function solve(n, p) {
    if (n % 2 == 0) ++n;
    return Math.min(Math.floor(p / 2), Math.floor((n - p) / 2));
}

function main(lines) {
    const [n, p] = read(lines);
    const ans = solve(n, p);
    console.log(ans);
}

function read(lines) {
    return [parseInt(lines[0], 10), parseInt(lines[1], 10)];
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
