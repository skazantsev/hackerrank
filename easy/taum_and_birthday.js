const BigNumber = require('bignumber.js');

function solve(b, w, bc, wc, z) {
    if (bc.isGreaterThan(wc.plus(z))) return wc.multipliedBy(w).plus(wc.plus(z).multipliedBy(b));
    if (wc.isGreaterThan(bc.plus(z))) return bc.plus(z).multipliedBy(w).plus(bc.multipliedBy(b));
    return wc.multipliedBy(w).plus(bc.multipliedBy(b));
}

function main(lines) {
    const data = read(lines);
    const ans = data.map(x => {
        const [b, w, bc, wc, z] = x;
        return solve(new BigNumber(b), new BigNumber(w), new BigNumber(bc), new BigNumber(wc), new BigNumber(z));
    });
    console.log(ans.join('\n'));
}

function read(lines) {
    const t = parseInt(lines[0], 10);
    const data = [];
    for (let i = 0; i < t; ++i) {
        const [b, w] = lines[(i * 2) + 1].split(' ').map(x => parseInt(x, 10));
        const [bc, wc, z] = lines[(i * 2) + 2].split(' ').map(x => parseInt(x, 10));
        data.push([b, w, bc, wc, z || 0]);
    }
    return data;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
