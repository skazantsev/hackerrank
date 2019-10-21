function solve(arr) {
    const map = new Map();
    let ans = -1;
    for (let i = 0; i < arr.length; ++i)  {
        const last_index = map.get(arr[i]);
        if (last_index != null && (ans == -1 || i - last_index < ans)) {
            ans = i - last_index;
        }
        map.set(arr[i], i);
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
