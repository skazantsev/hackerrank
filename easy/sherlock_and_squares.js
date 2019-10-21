function solve(range) {
    return Math.floor(Math.sqrt(range.right)) - Math.ceil(Math.sqrt(range.left)) + 1;
}

function main(lines) {
    const ranges = read(lines);
    const ans = ranges.map(r => solve(r));
    console.log(ans.join('\n'));
}

function read(lines) {
    const ranges = [];
    for (let i = 1; i < lines.length; ++i) {
        const [left, right] = lines[i].split(' ').map(x => parseInt(x, 10))
        ranges.push({ left: left, right: right });
    }
    return ranges;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
