// https://www.hackerrank.com/challenges/mars-exploration/problem
function solve(str) {
    let ans = 0;
    for (let i = 0; i < str.length; i += 3) {
        if (str[i] != 'S') ++ans;
        if (str[i + 1] != 'O') ++ans;
        if (str[i + 2] != 'S') ++ans;
    }
    return ans;
}

function main(lines) {
    const ans = solve(lines[0].split(''));
    console.log(ans);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
