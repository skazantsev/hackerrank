function solve(arr, k) {
    const remainder_counts = new Array(k);
    remainder_counts.fill(0);

    for (let num of arr) { remainder_counts[num % k]++; }

    let ans = 0;
    if (remainder_counts[0] > 0) { ans++; }
    if (k % 2 == 0 && remainder_counts[k / 2] > 0) { ans++; }

    for (let i = 1; i < Math.ceil(k / 2); ++i) {
        const x = remainder_counts[i];
        const y = remainder_counts[k - i];
        ans += Math.max(x, y);
    }
    return ans;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.arr, data.k);
    console.log(ans);
}

function read(lines) {
    return {
        k: lines[0].split(' ').map(x => parseInt(x, 10))[1],
        arr: lines[1].split(' ').map(x => parseInt(x, 10))
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
