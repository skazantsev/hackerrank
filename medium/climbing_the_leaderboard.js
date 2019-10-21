// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
// can be solved without binary search at O(N) but what fun it is :)
function solve(scores, arr) {
    let r = 1;
    const ranks = [r];
    for (let i = 1; i < scores.length; ++i) {
        if (scores[i] != scores[i - 1]) { ++r; }
        ranks.push(r);
    }
    const last_rank = ranks[ranks.length - 1];
    ranks.push(last_rank + 1);

    const ans = [];
    let last_index = scores.length - 1;
    for (let n of arr) {
        const index = __searchScoreUsingBinarySearch(scores, 0, last_index, n);
        ans.push(ranks[index]);
        last_index = index - 1;
    }
    return ans;
}

function __searchScoreUsingBinarySearch(arr, low, high, k) {
    // return an index of the first element that is less than 'k'
    if (low > high)
        return low;
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > k) {
        return __searchScoreUsingBinarySearch(arr, mid + 1, high, k);
    } else {
        return __searchScoreUsingBinarySearch(arr, low, mid - 1, k);
    }
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.scores, data.arr);
    console.log(ans.join('\n'));
}

function read(lines) {
    return {
        scores: lines[1].split(' ').map(x => parseInt(x, 10)),
        arr: lines[3].split(' ').map(x => parseInt(x, 10))
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
