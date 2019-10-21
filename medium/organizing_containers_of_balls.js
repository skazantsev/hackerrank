function solve(n, m) {
    const counts_per_container = new Array(n);
    counts_per_container.fill(0);

    const counts_per_type = new Array(n);
    counts_per_type.fill(0);

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            counts_per_container[i] += m[i][j];
            counts_per_type[j] += m[i][j];
        }
    }

    counts_per_container.sort((x, y) => x - y);
    counts_per_type.sort((x, y) => x - y);

    for (let i = 0; i < n; ++i) {
        if (counts_per_type[i] !== counts_per_container[i]) return false;
    }
    return true;
}

function main(lines) {
    const data = read(lines);
    const ans = data.map(x => solve(x.n, x.m));
    console.log(ans.map(x => x ? 'Possible': 'Impossible').join('\n'));
}

function read(lines) {
    const q = parseInt(lines[0], 10);
    const data = [];
    let li = 1;
    for (let i = 0; i < q; ++i) {
        const n = parseInt(lines[li++], 10);
        const m = [];
        for (let j = 0; j < n; ++j) {
            m.push(lines[li++].split(' ').map(x => parseInt(x, 10)));
        }
        data.push({
            n: n,
            m: m
        });
    }
    return data;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
