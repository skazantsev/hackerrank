function solve(s) {
    s = s.split('');
    let i = s.length - 1;
    while (i > 0 && s[i] <= s[i - 1]) { --i; }
    if (i == 0) return null;
    let j = s.length - 1;
    while (s[j] <= s[i - 1]) { --j; }
    
    __swap(s, i - 1, j);

    j = s.length - 1;
    while (i < j) {
        __swap(s, i, j);
        ++i;
        --j;
    }

    return s.join('');
}

function __swap(s, i, j) {
    const t = s[i];
    s[i] = s[j];
    s[j] = t;
}

function main(lines) {
    const arr = read(lines);
    const ans = arr.map(x => solve(x));
    console.log(ans.map(x => x != null ? x : 'no answer').join('\n'));
}

function read(lines) {
    const arr = [];
    for (let i = 1; i < lines.length; ++i) {
        arr.push(lines[i]);
    }
    return arr;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
