// https://www.hackerrank.com/challenges/3d-surface-area/problem
function solve(matrix, n, m) {
    let ans = n * m * 2;
    for (let row = 0; row < n; ++row) {
        for (let col = 0; col < m; ++col) {
            ans += Math.max(0, matrix[row][col] - (row > 0 ? matrix[row - 1][col] : 0));
            ans += Math.max(0, matrix[row][col] - (row < n - 1 ? matrix[row + 1][col] : 0));
            ans += Math.max(0, matrix[row][col] - (col > 0 ? matrix[row][col - 1] : 0));
            ans += Math.max(0, matrix[row][col] - (col < m - 1 ? matrix[row][col + 1] : 0));
        }
    }
    return ans;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.matrix, data.n, data.m);
    console.log(ans);
}

function read(lines) {
    const [n, m] = lines[0].split(' ').map(x => parseInt(x, 10));
    const matrix = new Array(n);
    for (let i = 0; i < n; ++i) {
        matrix[i] = lines[i + 1].split(' ').map(x => parseInt(x, 10));
    }
    return {
        n: n,
        m: m,
        matrix: matrix
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
