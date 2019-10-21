// https://www.hackerrank.com/challenges/almost-sorted/problem
const ANS = {
    NO: 0,
    SORTED: 1,
    SWAP: 2,
    REVERSE: 3
};

function solve(arr) {
    if (checkArrayIsSorted(arr))
        return { ans: ANS.SORTED };

    const n = arr.length;
    let first, second;
    for (let i = 0; i < n; ++i) {
        if (first == null && arr[i] > arr[i + 1]) {
            first = i;
        }
        if (second == null && arr[(n - 1) - i - 1] > arr[(n - 1) - i]) {
            second = (n - 1) - i;
        }
    }
    first = first || 0;
    second = second || arr.length - 1;

    swap(arr, first, second);
    if (checkArrayIsSorted(arr))
        return { ans: ANS.SWAP, first: first + 1, second: second + 1 };
    swap(arr, first, second);

    reverse(arr, first, second);
    if (checkArrayIsSorted(arr))
        return { ans: ANS.REVERSE, first: first + 1, second: second + 1 };

    return { ans: ANS.NO };
}

function checkArrayIsSorted(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] > arr[i + 1])
            return false;
    }
    return true;
}

function swap(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function reverse(arr, i, j) {
    while (i < j) {
        swap(arr, i, j);
        ++i;
        --j;
    }
}

function main(lines) {
    const arr = read(lines);
    const res = solve(arr);
    if (res.ans == ANS.NO) {
        console.log('no');
    } else {
        console.log('yes');
        if (res.ans == ANS.SWAP) {
            console.log(`swap ${res.first} ${res.second}`);
        } else if (res.ans == ANS.REVERSE) {
            console.log(`reverse ${res.first} ${res.second}`);
        }
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
