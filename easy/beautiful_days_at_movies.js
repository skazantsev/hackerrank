function solve(start, stop, k) {
    let ans = 0;
    for (let i = start; i <= stop; ++i) {
        const diff = i - parseInt(i.toString().split('').reverse().join(''), 10);
        if (diff % k === 0) ans++;
    }
    return ans;
}

function main(lines) {
    const [start, stop, k] = lines[0].split(' ').map(x => parseInt(x, 10));
    const ans = solve(start, stop, k);
    console.log(ans);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
