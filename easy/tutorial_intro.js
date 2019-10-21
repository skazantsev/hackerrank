// https://www.hackerrank.com/challenges/tutorial-intro/problem
function main(lines) {
    console.log(lines[2].split(' ').map(x => parseInt(x, 10)).indexOf(parseInt(lines[0], 10)));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
