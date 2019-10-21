function solve(arr) {
    const map = new Map();
    for (let x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    let max_freq = 0;
    for (let freq of map.values()) {
        if (freq > max_freq) {
            max_freq = freq;
        }
    }

    return arr.length - max_freq;
}

function main(lines) {
    const arr = read(lines);
    const ans = solve(arr);
    console.log(ans);
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
