function solve(s, t, k) {
    let diff_start = 0;
    while (diff_start < s.length && diff_start < t.length) {
        if (s[diff_start] == t[diff_start]) {
            diff_start++;
        } else {
            break;
        }
    }

    const diff_chars = s.length + t.length - diff_start * 2;

    if (k == diff_chars) return true;
    if (k > diff_chars && diff_chars % 2 == k % 2) return true;
    if (k >= s.length + t.length) return true;
    return false;

}

function main(lines) {
    const ans = solve(lines[0], lines[1], parseInt(lines[2], 10));
    console.log(ans ? "Yes" : "No");
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
