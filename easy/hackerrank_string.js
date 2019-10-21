// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
function solve(str) {
    let pattern = 'hackerrank'.split('');
    let si = 0;
    let pi = 0;
    while (si < str.length && pi < pattern.length) {
        if (pattern[pi] === str[si]) { ++pi; }
        ++si;
    }
    return pi == pattern.length;
}

function main(lines) {
    const strings = read(lines);
    strings.map(x => solve(x)).forEach(x => console.log(x ? 'YES' : 'NO'));
}

function read(lines) {
    const strings = [];
    for (let i = 1; i < lines.length; ++i) {
        strings.push(lines[i].split(''));
    }
    return strings;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
