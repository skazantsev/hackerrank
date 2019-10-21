// https://www.hackerrank.com/challenges/interval-selection/problem
function solve(a) {
    a.sort((x, y) => x.stop - y.stop);
    let ans = 1;
    let p = null;
    let c = a[0];
    for (let i = 1; i < a.length; ++i) {
        if (p != null && do_intervals_overlap(a[i], p))
            continue;
        
        ++ans;
        if (do_intervals_overlap(a[i], c)) { p = c; }
        c = a[i];
    }
    return ans;
}

function do_intervals_overlap(x, y) {
    return x.start <= y.stop && x.stop >= y.start;
}

function main(lines) {
    const sets = read(lines);
    sets.map(set => solve(set)).forEach(x => console.log(x));
}

function read(lines) {
    const s = parseInt(lines[0], 10);
    const sets = new Array(s);
    let ci = 0;
    for (let i = 0; i < s; ++i) {
        const n = parseInt(lines[++ci], 10);
        const set = new Array(n);
        for (let j = 0; j < n; ++j) {
            const [start, stop] = lines[++ci].split(' ').map(x => parseInt(x, 10));
            set[j] = { start: start, stop: stop };
        }
        sets.push(set);
    }
    return sets;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
