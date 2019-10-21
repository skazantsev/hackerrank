// https://www.hackerrank.com/challenges/lisa-workbook/problem
function solve(arr, k) {
    let chapter = 1, task = 1, page = 1, ans = 0;
    while (chapter <= arr.length) {
        const last_task = Math.min(task + k - 1, arr[chapter - 1]);
        if (page >= task && page <= last_task)
            ans++;

        if (arr[chapter - 1] == last_task) {
            chapter++;
            task = 1;
        } else {
            task = last_task + 1;
        }
        page++;
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
