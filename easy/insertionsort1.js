// https://www.hackerrank.com/challenges/insertionsort1/problem
function main(lines) {
    const arr = read(lines);
    if (arr.length == 1) {
        console.log(arr[0]);
        return;
    }

    const x = arr[arr.length - 1];
    let i = arr.length - 2;

    while (i >= 0) {
        if (arr[i] > x) {
            arr[i + 1] = arr[i];
            console.log(arr.join(' '));
            if (i == 0) {
                arr[i] = x;
                console.log(arr.join(' '));
            }
        } else {
            arr[i + 1] = x;
            console.log(arr.join(' '));
            break;
        }
        --i;
    }
}

function read(lines) {
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
