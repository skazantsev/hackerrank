function solve(m, n) {
    const cavities = [];
    for (let row = 1; row < n - 1; ++row) {
        for (let col = 1; col < n - 1; ++col) {
            const cur_depth = m[row][col];
            if (cur_depth > m[row - 1][col] &&
                cur_depth > m[row][col + 1] &&
                cur_depth > m[row + 1][col] &&
                cur_depth > m[row][col - 1]
            ) {
                cavities.push({ row: row, col: col });
            }
        }
    }
    for (let c of cavities) {
        m[c.row][c.col] = 'X';
    }
}

function main(lines) {
    const m = read(lines);
    solve(m, m.length);
    print(m);
}

function read(lines) {
    const m = [];
    for (let i = 1; i < lines.length; ++i) {
        const row = lines[i].split('').map(x => parseInt(x, 10));
        m.push(row);
    }
    return m;
}

function print(m) {
    for (let i = 0; i < m.length; ++i) {
        console.log(m[i].join(''));
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
