// https://www.hackerrank.com/challenges/bomber-man/problem

const STATES = {
    0: 'all',
    1: 'second_board',
    2: 'all',
    3: 'first_board'
};

const BOMB = 'O';
const EMPTY = '.';

function solve(r, c, n, grid) {
    if (n === 1)
        return grid;

    const state = STATES[n % 4];
    if (state === 'all') {
        grid.forEach(line => line.fill(BOMB));
        return;
    }

    plant_and_detonate(r, c, grid);
    if (state === 'first_board')
        return;

    plant_and_detonate(r, c, grid);
}

function plant_and_detonate(r, c, grid) {
    const cells_with_bombs = [];
    for (let i = 0; i < r; ++i) {
        for (let j = 0; j < c; ++j) {
            if (grid[i][j] === BOMB) {
                cells_with_bombs.push([i, j]);
            }
        }
    }

    grid.forEach(line => line.fill(BOMB));

    const dir = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let [i, j] of cells_with_bombs) {
        for (let [dr, dc] of dir) {
            let row = i + dr;
            let col = j + dc;
            if (row >= 0 && row < r && col >= 0 && col < c) {
                grid[row][col] = EMPTY;
            }
        }
    }
}

function main(lines) {
    const [r, c, n, grid] = read(lines);
    solve(r, c, n, grid);
    console.log(grid.map(arr => arr.join('')).join('\n'));
}

function read(lines) {
    return [...lines[0].split(' ').map(x => parseInt(x, 10)), lines.slice(1).map(line => line.split(''))];
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
