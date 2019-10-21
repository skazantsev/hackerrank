// https://www.hackerrank.com/challenges/almost-sorted/problem
const ANS = {
    NO: 0,
    SORTED: 1,
    SWAP: 2,
    REVERSE: 3
};

function solve(arr) {
    const n = arr.length;
    const ups = [];
    const downs = [];

    if (checkArrayIsSorted(arr))
        return { ans: ANS.SORTED };

    for (let i = 0; i < n; ++i) {
        if (
            (i == 0 && arr[i] > arr[i + 1]) ||
            (i > 0 && i < n && arr[i - 1] < arr[i] && arr[i] > arr[i + 1] && arr[i - 1] < arr[i + 1])
        ) {
            ups.push(i);
        }

        if ( 
            (i == n - 1 && arr[i - 1] > arr[i]) ||
            (i > 0 && i < n && arr[i - 1] > arr[i] && arr[i] < arr[i + 1] && arr[i - 1] < arr[i + 1])
        ) {
            downs.push(i);
        }
    }

    if (ups.length == 1 && downs.length == 1) {
        swap(arr, ups[0], downs[0]);
        if (checkArrayIsSorted(arr))
            return { ans: ANS.SWAP, first: ups[0] + 1, second: downs[0] + 1 };
        swap(arr, ups[0], downs[0]);

        reverse(arr, ups[0], downs[0]);
        if (checkArrayIsSorted(arr))
            return { ans: ANS.REVERSE, first: ups[0] + 1, second: downs[0] + 1 };
    }

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
