// https://www.hackerrank.com/challenges/diagonal-difference/problem
function solve(matrix, size) {
    let primaryDiagonalSum = 0;
    for (let i = 0; i < size; ++i) {
        primaryDiagonalSum += matrix[i][i];
    }

    let secondaryDiagonalSum = 0;
    for (let i = 0; i < size; ++i) {
        secondaryDiagonalSum += matrix[i][size - 1 - i];
    }
    
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

function main(lines) {
    const matrix = read(lines);
    const res = solve(matrix, matrix.length);
    console.log(res);
}

function read(lines) {
    const matrix = [];
    for (let i = 1; i < lines.length; ++i) {
        const row = lines[i].split(' ').map(x => parseInt(x, 10));
        matrix.push(row);
    }
    return matrix;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
