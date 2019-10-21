// https://www.hackerrank.com/challenges/happy-ladybugs/problem
function solve(arr) {
    const counts = new Array(26);
    counts.fill(0);

    let spaces = 0;
    for (let x of arr) {
        if (x == -1) {
            spaces++;
        } else {
            counts[x]++;
        }
    }

    if (spaces === 0) {
        let same_color_count = 1;
        for (let i = 0; i < arr.length - 1; ++i) {
            if (arr[i] == arr[i + 1]) {
                same_color_count++;
            } else {
                if (same_color_count === 1) return false;
                same_color_count = 1;
            }
        }
        return same_color_count !== 1;
    }

    for (let i = 0; i < counts.length; ++i) {
        if (counts[i] === 1) return false;
    }
    return true;
}

function main(lines) {
    const games = read(lines);
    const results = games.map(x => solve(x));
    results.forEach(x => console.log(x ? 'YES' : 'NO'));
}

function read(lines) {
    let cur_line = 0;
    const g = parseInt(lines[cur_line], 10);
    const games = [];
    for (let i = 0; i < g; ++i) {
        cur_line += 2;
        const game = lines[cur_line].split('').map(x => x == '_' ? -1 : x.charCodeAt(0) - 65);
        games.push(game);
    }
    return games;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
