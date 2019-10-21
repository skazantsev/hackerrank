// https://www.hackerrank.com/challenges/kangaroo/problem
function solve(data) {
    const [x1, v1, x2, v2] = data;
    const speed_diff = v1 - v2;
    // if speed_diff is less than 0 the 1st kangaroo will never catch up the 2nd
    if (speed_diff <= 0)
        return false;

    // otherwise the 2nd will catch up and we only need to check if they meet in the same point
    const distance = x2 - x1;
    return distance % speed_diff === 0;
}

function main(lines) {
    const data = read(lines);
    const res = solve(data);
    console.log(res ? "YES" : "NO");
}

function read(lines) {
    return lines[0].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
