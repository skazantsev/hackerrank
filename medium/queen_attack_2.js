function solve(n, q, obstacles) {
    let u = q.row - 1;
    let ur = Math.min(q.row - 1, n - q.col);
    let r = n - q.col;
    let dr = Math.min(n - q.row, n - q.col);
    let d = n - q.row;
    let dl = Math.min(n - q.row, q.col - 1);
    let l = q.col - 1;
    let ul = Math.min(q.row - 1, q.col - 1);
    for (let o of obstacles) {
        // up
        if (o.col == q.col && o.row < q.row && q.row - o.row - 1 < u) {
            u = q.row - o.row - 1;
        }
        // up-right
        if (o.col > q.col && o.row < q.row && o.col - q.col === q.row - o.row && q.row - o.row - 1 < ur) {
            ur = q.row - o.row - 1;
        }
        // right
        if (o.col > q.col && o.row == q.row && o.col - q.col - 1 < r) {
            r = o.col - q.col - 1;
        }
        // down-right
        if (o.col > q.col && o.row > q.row && o.col - q.col == o.row - q.row && o.row - q.row - 1 < dr) {
            dr = o.row - q.row - 1;
        }
        // down
        if (o.col == q.col && o.row > q.row && o.row - q.row - 1 < d) {
            d = o.row - q.row - 1;
        }
        // down-left
        if (o.col < q.col && o.row > q.row && q.col - o.col == o.row - q.row && o.row - q.row - 1 < dl) {
            dl = o.row - q.row - 1;
        }
        // left
        if (o.col < q.col && o.row == q.row && q.col - o.col - 1 < l) {
            l = q.col - o.col - 1;
        }
        // up-left
        if (o.col < q.col && o.row < q.row && q.col - o.col == q.row - o.row && q.row - o.row - 1 < ul) {
            ul = q.row - o.row - 1;
        }
    }
    return u + ur + r + dr + d + dl + l + ul;
}

function main(lines) {
    const data = read(lines);
    const ans = solve(data.n, data.q, data.obstacles);
    console.log(ans);
}

function read(lines) {
    const [n, k] = lines[0].split(' ').map(x => parseInt(x, 10));
    const [rq, cq] = lines[1].split(' ').map(x => parseInt(x, 10));
    const obstacles = [];
    for (let i = 0; i < k; ++i) {
        const [r, c] = lines[i + 2].split(' ').map(x => parseInt(x, 10));
        obstacles.push({ row: r, col: c });
    }
    return {
        n: n,
        q: { row: rq, col: cq },
        obstacles: obstacles
    }
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
