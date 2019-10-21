// https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem
// the method mutates the matrix, pure method required additional O(N*N) space
function solve(a, n, m) {
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            ans = Math.max(ans, visit(a, n, m, i, j));
        }
    }
    return ans;
}

function visit(a, n, m, i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || a[i][j] === 0)
        return 0;

    a[i][j] = 0;
    let res = 1;
    for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
            res += visit(a, n, m, i + r, j + c);
        }
    }
    return res;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.a, data.n, data.m);
    console.log(ans);
}

function read(lines) {
    const n = parseInt(lines[0], 10);
    const m = parseInt(lines[1], 10);
    const a = new Array(n);
    for (let i = 0; i < n; ++i) {
        a[i] = lines[i + 2].split(' ').map(x => parseInt(x, 10));
    }
    return { a: a, n: n, m: m };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
