function solve(arr, n, d) {
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (arr[j] - arr[i] > d) break;
            if (arr[j] - arr[i] < d) continue;
            for (let k = j + 1; k < n; ++k) {
                if (arr[k] - arr[j] > d) break;
                if (arr[k] - arr[j] < d) continue;
                 ans++;
            }
        }
    }
    return ans;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.arr, data.arr.length, data.d);
    console.log(ans);
}

function read(lines) {
    return {
        d: lines[0].split(' ').map(x => parseInt(x, 10))[1],
        arr: lines[1].split(' ').map(x => parseInt(x, 10))
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
