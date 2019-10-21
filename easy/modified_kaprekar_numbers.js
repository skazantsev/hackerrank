function solve(p, q) {
    const ans = [];
    for (let n = p; n <= q; ++n) {
        let square = n * n;
        let s = square.toString();
        let l = parseInt(s.substr(0, Math.floor(s.length / 2)) || '0', 10)
        let r = parseInt(s.substr(Math.floor(s.length / 2)) || '0', 10);
        if (l + r == n) {
            ans.push(n);
        }
    }
    return ans;
}

function main(lines) {
    const ans = solve(parseInt(lines[0], 10), parseInt(lines[1], 10));
    console.log(ans.length > 0 ? ans.join(' ') : 'INVALID RANGE');
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
