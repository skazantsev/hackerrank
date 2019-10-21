function solve(arr) {
    let ans = 0;
    let i = 0;
    while (i < arr.length - 1) {
        if (i + 2 < arr.length && arr[i + 2] === 0) {
            i += 2;
        } else {
            i++;
        }
        ans++;
    }
    return ans;
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
