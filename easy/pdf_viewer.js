// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
function solve(heights, chars) {
    return Math.max(...chars.map(x => heights[x.charCodeAt(0) - 97])) * chars.length;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.heights, data.chars);
    console.log(ans);
}

function read(lines) {
    return {
        heights: lines[0].split(' ').map(x => parseInt(x, 10)),
        chars: lines[1].split('')
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
