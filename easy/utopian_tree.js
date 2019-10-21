// https://www.hackerrank.com/challenges/utopian-tree/problem
function solve(arr) {
    const ans = [];
    for (let n of arr) {
        let h = 1;
        let is_summer_season = true;
        for (let i = 0; i < n; ++i) {
            if (is_summer_season) {
                h *= 2;
            } else {
                h++;
            }
            is_summer_season = !is_summer_season;
        }
        ans.push(h);
    }
    return ans;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans.join('\n'));
}

function read(lines) {
    const arr = [];
    for (let i = 1; i < lines.length; ++i) {
        arr.push(parseInt(lines[i], 10));
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
