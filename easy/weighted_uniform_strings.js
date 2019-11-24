// https://www.hackerrank.com/challenges/weighted-uniform-string
function solve(s, queries) {
    const weights = new Set();

    let start = 0, end = 0;
    while (end < s.length) {
        if (s[start] === s[end]) {
            const code = s[end].charCodeAt(0) - 96;
            weights.add(code * (end - start + 1));
            end++;
        } else {
            start = end;
        }
    }

    return queries.map(x => weights.has(x) ? "Yes" : "No");
}

function main(lines) {
    const [s, queries] = read(lines);
    const ans = solve(s, queries);
    console.log(ans.join('\n'));
}

function read(lines) {
    const s = lines[0];
    const queries = lines.slice(2).map(x => parseInt(x, 10))
    return [s, queries];
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
