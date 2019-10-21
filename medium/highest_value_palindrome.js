function solve(s, k) {
    const chars = s.split('');
    const equal = new Array(s.length).fill(false);

    let low = 0;
    let high = chars.length - 1;
    while (low < high) {
        if (chars[low] === chars[high]) {
            equal[low] = true;
        } else {
            chars[low] = chars[high] = chars[low] > chars[high] ? chars[low] : chars[high];
            --k;
        }

        ++low;
        --high;
    }

    if (k < 0)
        return -1;

    low = 0;
    high = chars.length - 1;
    while (low <= high && k > 0) {
        if (chars[low] !== '9') {
            if (!equal[low] && k >= 1) {
                k--;
                chars[low] = chars[high] = '9';
            } else if (equal[low] && k >= 2) {
                k -= 2;
                chars[low] = chars[high] = '9';
            }
        }

        ++low;
        --high;
    }

    return chars.join('');
}

function main(lines) {
    const [str, k] = read(lines);
    const ans = solve(str, k);
    console.log(ans);
}

function read(lines) {
    return [lines[1], parseInt(lines[0].split(' ')[1], 10)];
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));

describe ('Tests', () => {
    it ('Case 1', () => {
        expect(solve('5', 1)).toEqual('9');
        expect(solve('12321', 1)).toEqual('12921');
        expect(solve('3943', 1)).toEqual('3993');
        expect(solve('092282', 3)).toEqual('992299');
        expect(solve('0011', 1)).toEqual(-1);
        expect(solve('1234', 1)).toEqual(-1);
        expect(solve('1234', 2)).toEqual('4334');
        expect(solve('1234', 3)).toEqual('9339');
        expect(solve('1234', 4)).toEqual('9999');
    });
});