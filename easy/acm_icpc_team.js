function solve(attendees, n, m) {
    let max_topics = 0;
    let ways_count = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let s = 0;
            for (let k = 0; k < m; ++k) {
                if (attendees[i][k] === 1 || attendees[j][k] === 1) { s++; }
            }
            if (s === max_topics) {
                ways_count++;
            } else if (s > max_topics) {
                max_topics = s;
                ways_count = 1;
            }
        }
    }
    return [max_topics, ways_count];
}

function main(lines) {
    const attendees = read(lines);
    const ans = solve(attendees, attendees.length, attendees[0].length);
    console.log(ans.join('\n'));
}

function read(lines) {
    let attendees = [];
    for (let i = 1; i < lines.length; ++i) {
        const topics = lines[i].split('').map(x => parseInt(x, 10));
        attendees.push(topics);
    }
    return attendees;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
