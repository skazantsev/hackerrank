// https://www.hackerrank.com/challenges/caesar-cipher-1/problem
function solve(str, shifts) {
    const size = 26;
    const smallACode = 'a'.charCodeAt(0);
    const smallZCode = 'z'.charCodeAt(0);
    const capitalACode = 'A'.charCodeAt(0);
    const capitalZCode = 'Z'.charCodeAt(0);
    
    for (let i = 0; i < str.length; ++i) {
        const code = str[i].charCodeAt(0);
        if (smallACode <= code && code <= smallZCode) {
            str[i] = String.fromCharCode(((code - smallACode) + shifts) % size + smallACode);
        }
        if (capitalACode <= code && code <= capitalZCode) {
            str[i] = String.fromCharCode(((code - capitalACode) + shifts) % size + capitalACode);
        }
    }

    return str;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.str, data.shifts);
    console.log(ans.join(''));
}

function read(lines) {
    return {
        str: lines[1].split(''),
        shifts: parseInt(lines[2], 10)
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
