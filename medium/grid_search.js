// https://www.hackerrank.com/challenges/the-grid-search/problem
function solve(grid_rows, grid_cols, grid, pattern_rows, pattern_cols, pattern) {
    for (let i = 0; i < grid_rows - pattern_rows + 1; ++i) {
        for (let j = 0; j < grid_cols - pattern_cols + 1; ++j) {
            if (grid[i][j] == pattern[0][0] && __isPatternPresent(grid, i, j, pattern, pattern_rows, pattern_cols))
                return true;
        }
    }
}

function __isPatternPresent(grid, row_offset, col_offset, pattern, pattern_rows, pattern_cols) {
    for (let i = 0; i < pattern_rows; ++i) {
        for (let j = 0; j < pattern_cols; ++j) {
            if (grid[row_offset + i][col_offset + j] != pattern[i][j]) return false;
        }
    }
    return true;
}

function main(lines) {
    const cases = read(lines);
    const results = cases.map(x => solve(x.grid_rows, x.grid_cols, x.grid, x.pattern_rows, x.pattern_cols, x.pattern));
    results.map(x => x ? 'YES' : 'NO').forEach(x => console.log(x));
}

function read(lines) {
    const t = parseInt(lines[0], 10);
    const cases = [];
    let cur_line = 0;
    for (let i = 0; i < t; ++i) {
        // read a grid
        const [grid_rows, grid_cols] = lines[++cur_line].split(' ').map(x => parseInt(x, 10));
        const grid = new Array(grid_rows);
        for (let j = 0; j < grid_rows; ++j) {
            grid[j] = lines[++cur_line].split('').map(x => parseInt(x, 10));
        }

        // read a pattern
        const [pattern_rows, pattern_cols] = lines[++cur_line].split(' ').map(x => parseInt(x, 10));
        const pattern = new Array(pattern_rows);
        for (let j = 0; j < pattern_rows; ++j) {
            pattern[j] = lines[++cur_line].split('').map(x => parseInt(x, 10));
        }
        cases.push({
            grid_rows: grid_rows,
            grid_cols: grid_cols,
            grid: grid,
            pattern_rows: pattern_rows,
            pattern_cols: pattern_cols,
            pattern: pattern
        });
    }
    return cases;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
