// https://www.hackerrank.com/challenges/between-two-sets/problem
function solve(a, b) {
    let ans = 0;
    const max_in_a = Math.max(...a);
    const min_in_b = Math.max(...b);
    for (let n = max_in_a; n <= min_in_b; n += max_in_a) {
        let isBetween = true;
        for (let i = 0; i < a.length; ++i) {
            if (n % a[i] != 0) {
                isBetween = false;
                break;
            }
        }

        if (isBetween) {
            for (let i = 0; i < b.length; ++i) {
                if (b[i] % n != 0) {
                    isBetween = false;
                    break;
                }
            }
        }

        if (isBetween) {
            ans++;
        }
    }
    return ans;
}

function main(lines) {
    const [a, b] = read(lines);
    const ans = solve(a, b);
    console.log(ans);
}

function read(lines) {
    return [
        lines[1].split(' ').map(x => parseInt(x, 10)),
        lines[2].split(' ').map(x => parseInt(x, 10))
    ]
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
