// https://www.hackerrank.com/challenges/apple-and-orange/problem
function solve(data) {
    const ans = [0, 0];

    for (let apple of data.apples) {
        const x = data.apple_tree + apple;
        if (x >= data.house.start && x <= data.house.end) ans[0]++;
    }

    for (let orange of data.oranges) {
        const x = data.orange_tree + orange;
        if (x >= data.house.start && x <= data.house.end) ans[1]++;
    }

    return ans;
}

function main(lines) {
    const data = read(lines);
    const res = solve(data);
    console.log(res.join('\n'));
}

function read(lines) {
    const house = lines[0].trim().split(' ').map(x => parseInt(x, 10));
    const trees = lines[1].split(' ').map(x => parseInt(x, 10));
    const apples = lines[3].split(' ').map(x => parseInt(x, 10));
    const oranges = lines[4].split(' ').map(x => parseInt(x, 10));
    return {
        house: {
            start: house[0],
            end: house[1]
        },
        apple_tree: trees[0],
        orange_tree: trees[1],
        apples: apples,
        oranges: oranges
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
