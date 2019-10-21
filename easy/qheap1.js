// https://www.hackerrank.com/challenges/qheap1/problem
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    delete(val) {
        const index = this.heap.indexOf(val);
        this.__swap(index, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown(index);
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    heapifyUp(index) {
        const pi = Math.floor((index - 1) / 2);
        if (pi >= 0 && this.heap[index] < this.heap[pi]) {
            this.__swap(index, pi);
            this.heapifyUp(pi);
        }
    }

    heapifyDown(index) {
        const lci = index * 2 + 1;
        const rci = lci + 1;
        if (lci >= this.heap.length)
            return;
    
        const mci = rci >= this.heap.length || this.heap[lci] <= this.heap[rci] ? lci : rci;
        if (this.heap[index] > this.heap[mci]) {
            this.__swap(index, mci);
            this.heapifyDown(mci);
        }
    }
    
    __swap(i, j) {
        let t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }
}

function main(lines) {
    const queries = read(lines);
    const pq = new MinHeap();
    for (let q of queries) {
        if (q[0] == 1) {
            pq.insert(q[1]);
        } else if (q[0] == 2) {
            pq.delete(q[1]);
        } else {
            console.log(pq.peek());
        }
    }
}

function read(lines) {
    const queries = [];
    for (let i = 1; i < lines.length; ++i) {
        const arr = lines[i].split(' ').map(x => parseInt(x, 10));
        queries.push(arr);
    }
    return queries;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let lines = [];
rl.on('line', x => lines.push(x))
  .on('close', _ => main(lines));
