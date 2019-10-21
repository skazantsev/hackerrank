function solve(arr) {
    const itemToSelect = Math.floor(arr.length / 2);
    return quickSelect(arr, itemToSelect, 0, arr.length - 1);
}

// tail-call optimization should optimize recursion calls
function quickSelect(arr, k, low, high) {
    if (low == high)
        return arr[low];

    let pivotIndex = __getRandomPivotIndex(low, high);
    pivotIndex = __partition(arr, low, high, pivotIndex);
    if (pivotIndex === k)
        return arr[pivotIndex];

    return pivotIndex < k
        ? quickSelect(arr, k, pivotIndex + 1, high)
        : quickSelect(arr, k, low, pivotIndex - 1);

}

function __getRandomPivotIndex(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function __partition(arr, low, high, pivotIndex) {
    __swap(arr, pivotIndex, high);

    const pivot = arr[high];
    let last = low;
    for (let i = low; i < high; ++i) {
        if (arr[i] < pivot) {
            __swap(arr, last, i);
            ++last;
        }
    }

    __swap(arr, high, last);
    return last;
}

function __swap(arr, i, j) {
    if (i != j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
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
