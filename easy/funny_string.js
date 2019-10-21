// https://www.hackerrank.com/challenges/funny-string/problem
function solve(str) {
    const reversed = str.split('').reverse().join('');

    let str_prev_code = str.charCodeAt(0);
    let reversed_prev_code = reversed.charCodeAt(0);
    for (let i = 1; i < Math.ceil(str.length / 2); ++i) {
        const s_code = str.charCodeAt(i);
        const r_code = reversed.charCodeAt(i);
        if (Math.abs(s_code - str_prev_code) != Math.abs(r_code - reversed_prev_code))
            return false;
        str_prev_code = s_code;
        reversed_prev_code = r_code;
    }
    return true;
}

function main(lines) {
    const arr = read(lines);
    const ans = arr.map(x => solve(x));
    ans.map(x => x ? 'Funny' : 'Not Funny').forEach(x => console.log(x));
}

function read(lines) {
    const arr = [];
    for (let i = 1; i < lines.length; ++i) {
        arr.push(lines[i]);
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
