// https://www.hackerrank.com/challenges/library-fine/problem
function solve(returnDate, dueDate) {
    if (returnDate.year > dueDate.year)
        return 10000;
    if (returnDate.year == dueDate.year && returnDate.month > dueDate.month)
        return (returnDate.month - dueDate.month) * 500;
    if (returnDate.year == dueDate.year && returnDate.month == dueDate.month && returnDate.day > dueDate.day)
        return (returnDate.day - dueDate.day) * 15;
    return 0;
}

function main(lines) {
    const ans = solve(parseDate(lines[0]), parseDate(lines[1]));
    console.log(ans);
}

function parseDate(line) {
    const [d, m, y] = line.split(' ').map(x => parseInt(x, 10));
    return new MyDate(d, m, y);
}

class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
