function solve(str) {
    str = str.split('').filter(x => x != ' ');
    const l_sqrt = Math.sqrt(str.length);
    let rows = Math.floor(l_sqrt);
    let cols = Math.ceil(l_sqrt);
    if (rows * cols < str.length) { rows++; }

    const ans = [];
    for (let j = 0; j < cols; ++j) {
        let colHasChars = false;
        for (let i = 0; i < rows; ++i) {
            const idx = i * cols + j;
            if (idx < str.length) {
                ans.push(str[idx]);
                colHasChars = true;
            }
        }
        if (colHasChars) {
            ans.push(' ');
        }
    }
    return ans.join('');
}

function main(lines) {
    const ans = solve(lines[0]);
    console.log(ans);
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
