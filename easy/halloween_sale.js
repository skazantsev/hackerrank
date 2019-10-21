function solve(p, d, m, s) {
    let ans = 0;
    while (s >= p) {
        ans++;
        s -= p;
        p = Math.max(p - d, m);
    }
    return ans;
}

function main(lines) {
    const [p, d, m, s] = read(lines);
    const ans = solve(p, d, m, s);
    console.log(ans);
}

function read(lines) {
    return lines[0].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
