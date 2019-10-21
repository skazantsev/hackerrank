function sum(ar) {
    return ar.length > 0 ? ar.reduce((s, x) => s + x) : 0;
}

function main(input) {
    const arr = read(input);
    const res = sum(arr);
    console.log(res);
}

function read(input) {
    const lines = input.split('\n');
    return lines[1].split(' ').map(x => parseInt(x, 10));
}

let input = '';
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', x => { input += x; });
process.stdin.on('end', () => { main(input) });
