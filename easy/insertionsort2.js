// https://www.hackerrank.com/challenges/insertionsort2/problem
function main(lines) {
    const arr = read(lines);
    let ans = 0;
    for (let i = 1; i < arr.length; ++i) {
        let x = arr[i];
        let j = i - 1
        while (j >= 0 && arr[j] > x) {
            arr[j + 1] = arr[j];
            ans++;
            --j;
        }
        arr[j + 1] = x;
    }
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
