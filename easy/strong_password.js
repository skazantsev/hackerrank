// https://www.hackerrank.com/challenges/strong-password/problem
function solve(s) {
    let chars_left = 4;
    const special_chars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
    let containsDigit = false, containsLowercaseChar = false, containsUppercaseChar = false, containsSpecialChar = false;
    for (let x of s) {
        if ('0' <= x && x <= '9' && !containsDigit) {
            --chars_left;
            containsDigit = true;
        } else if ('a' <= x && x <= 'z' && !containsLowercaseChar) {
            --chars_left;
            containsLowercaseChar = true;
        } else if ('A' <= x && x <= 'Z' && !containsUppercaseChar) {
            --chars_left;
            containsUppercaseChar = true;
        } else if (special_chars.indexOf(x) >= 0 && !containsSpecialChar) {
            --chars_left;
            containsSpecialChar = true;
        }
    }
    return Math.max(Math.max(0, 6 - s.length), chars_left);
}

function main(lines) {
    console.log(solve(lines[1]));
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
