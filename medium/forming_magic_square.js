// https://www.hackerrank.com/challenges/magic-square-forming/problem
const SIZE = 3;
const CELL_COUNT = SIZE * SIZE;

function solve(matrix, magicSquares) {
    let ans = null;
    for (let ms of magicSquares) {
        let sum = 0;
        for (let i = 0; i < SIZE; ++i) {
            for (let j = 0; j < SIZE; ++j) {
                sum += Math.abs(matrix[i][j] - ms[i][j]);
            }
        }
        if (ans === null || sum < ans) {
            ans = sum;
        }
    }
    return ans;
}

function main(lines) {
    const matrix = read(lines)
    const magicSquares = [];
    __generate3x3MagicSquares(0, [], [], ans => magicSquares.push(ans));

    const ans = solve(matrix, magicSquares);   
    console.log(ans);
}

// a method that generates all 3x3 magic squares
function __generate3x3MagicSquares(index, ans, used, callback) {
    if (index === CELL_COUNT) {
        callback(__fromArrayToMatrix(ans));
        return;
    }

    for (let n = 1; n <= CELL_COUNT; ++n) {
        if (__canPlace(n, ans, used, index)) {
            ans[index] = n;
            used[n - 1] = true;
            __generate3x3MagicSquares(index + 1, ans, used, callback);
            used[n - 1] = false;
            ans[index] = 0;
        }
    }
}

function __fromArrayToMatrix(ans) {
    const m = [];
    for (let i = 0; i < SIZE; ++i) {
        m[i] = [];
        for (let j = 0; j < SIZE; ++j) {
            m[i][j] = ans[i * SIZE + j];
        }
    }
    return m;
}

// there're a couple of other optimizations that can be done here but it's already OK
function __canPlace(n, ans, used, index) {
    let row = Math.floor(index / SIZE);
    let col = index % SIZE;

    // used[i] represents a fact that a number (i + 1) was already placed
    if (used[n - 1]) return false;

    // when a row is complete
    if (col == 2 && n + ans[index - 1] + ans[index - 2] != 15) return false;

    // when a col is complete
    if (row == 2 && n + ans[index - 3] + ans[index - 6] != 15) return false;

    // when a primary diag is complete
    if (row == 2 && col == 2 && n + ans[index - 4] + ans[index - 8] != 15) return false;

    // when a secondary diag is complete
    if (row == 2 && col == 0 && n + ans[index - 2] + ans[index - 4] != 15) return false;

    // check the middle
    if (row == 1 && col == 1 && n != 5) return false;

    return true;
}

function read(lines) {
    const matrix = [];
    for (let i = 0; i < SIZE; ++i) {
        matrix[i] = lines[i].split(' ').map(x => parseInt(x, 10));
    }
    return matrix;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
