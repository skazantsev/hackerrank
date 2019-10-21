// https://www.hackerrank.com/challenges/time-conversion/problem
function format(data) {
    let hours24;
    if (data.hours == 12) {
        hours24 = data.isPm ? 12 : 0;
    } else {
        hours24 = data.isPm ? data.hours + 12 : data.hours;
    }
    return `${pad(hours24)}:${pad(data.minutes)}:${pad(data.seconds)}`;
}

function pad(num) {
    return num >= 10 ? num.toString() : `0${num}`;

}

function main(lines) {
    const data = read(lines);
    const res = format(data);
    console.log(res);
}

function read(lines) {
    const chars = lines[0].split('');
    return {
        hours: parseInt(chars[0] + chars[1], 10),
        minutes: parseInt(chars[3] + chars[4], 10),
        seconds: parseInt(chars[6] + chars[7], 10),
        isPm: chars[8] === 'P'
    };
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
