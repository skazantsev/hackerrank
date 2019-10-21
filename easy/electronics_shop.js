// https://www.hackerrank.com/challenges/electronics-shop/problem
function solve(budget, a1, a2) {
    let s = -1;
    for (let x of a1) {
        for (let y of a2) {
            if (x + y > budget) continue;
            s = Math.max(s, x + y);
        }
    }
    return s;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.budget, data.keyboard_prices, data.usb_drive_prices);
    console.log(ans);
}

function read(lines) {
    return {
        budget: lines[0].split(' ').map(x => parseInt(x, 10))[0],
        keyboard_prices: lines[1].split(' ').map(x => parseInt(x, 10)),
        usb_drive_prices: lines[2].split(' ').map(x => parseInt(x, 10))
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
