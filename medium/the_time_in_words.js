// https://www.hackerrank.com/challenges/the-time-in-words/problem
function solve(hours, minutes) {
    const num_to_str = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
        7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
        13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
        19: 'nineteen', 20: 'twenty', 21: 'twenty one', 22: 'twenty two', 23: 'twenty three', 24: 'twenty four',
        25: 'twenty five', 26: 'twenty six', 27: 'twenty seven', 28: 'twenty eight', 29: 'twenty nine'
    };

    if (minutes == 0) {
        return `${num_to_str[hours]} o' clock`;
    }
    if (minutes == 15) {
        return `quarter past ${num_to_str[hours]}`;
    }
    if (minutes == 30) {
        return `half past ${num_to_str[hours]}`;
    }
    if (minutes >= 1 && minutes <= 29) {
        return `${num_to_str[minutes]} minute${minutes == 1 ? '' : 's'} past ${num_to_str[hours]}`;
    }

    const rest_minutes = 60 - minutes;
    if (rest_minutes == 15) {
        return `quarter to ${num_to_str[hours + 1]}`;
    }
    return `${num_to_str[rest_minutes]} minute${rest_minutes == 1 ? '' : 's'} to ${num_to_str[hours + 1]}`;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.hours, data.minutes);
    console.log(ans);
}

function read(lines) {
    return {
        hours: parseInt(lines[0], 10),
        minutes: parseInt(lines[1], 10),
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
