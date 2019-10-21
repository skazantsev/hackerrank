function solve(year) {
    if (year < 1918) return year % 4 == 0 ? `12.09.${year}`: `13.09.${year}`;
    if (year == 1918) return `26.09.${year}`;

    const isLeap = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
    return isLeap ? `12.09.${year}` : `13.09.${year}`;
}

function main(lines) {
    const year = read(lines);
    const ans = solve(year);
    console.log(ans);
}

function read(lines) {
    return parseInt(lines[0], 10);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
