// https://www.hackerrank.com/challenges/the-birthday-bar/problem
function solve(arr, value, size) {
    let ans = 0;
    if (arr.length < size)
        return ans;

    let sum = 0;
    let i = 0;
    while (i < size) {
        sum += arr[i];
        ++i;
    }

    if (sum == value)
        ans++;

    let j = 0;
    while (i < arr.length) {
        sum += arr[i];
        sum -= arr[j];
        if (sum == value)
            ans++;
        ++i;
        ++j;
    }

    return ans;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.arr, data.value, data.size);
    console.log(ans);
}

function read(lines) {
    const arr = lines[1].split(' ').map(x => parseInt(x, 10));
    const [value, size] = lines[2].split(' ').map(x => parseInt(x, 10));

    return {
        arr: arr,
        value: value,
        size: size
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
