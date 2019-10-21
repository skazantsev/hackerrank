// https://www.hackerrank.com/challenges/stockmax/problem

//console.log(`i=${i} s[i].i=${s[i].i} li=${li} d=${s[i].v - a[li]}`);
function solveBad(a) {
    s = a.map((v, i) => ({ v: v, i: i }));
    s.sort((x, y) => y.v - x.v);
    
    let sum = 0;
    let li = 0;
    for (let i = 0; i < s.length; ++i) {
        while (li < s[i].i) {
            sum += s[i].v - a[li];
            li++;
        }
        if (s[i].i + 1 > li) {
            li = s[i].i + 1;
        }
    }
    return sum;
}

function stockMax(prices) {
    let current_max = prices[prices.length - 1];
    let sum = 0;
    for (let i = prices.length - 2; i >= 0; --i) {
        if (prices[i] < current_max) {
            sum += current_max - prices[i];
        } else {
            current_max = prices[i];
        }
    }

    return sum;
}

describe ('Test min abs difference', () => {
    it ('Case 1', () => {
        expect(stockMax([5, 3, 2])).toBe(0);
    });

    it ('Case 2', () => {
        expect(stockMax([1, 2, 100])).toBe(197);
    });

    it ('Case 3', () => {
        expect(stockMax([1, 3, 1, 2])).toBe(3);
    });

    it ('Case 4', () => {
        expect(stockMax([5, 9, 1, 7, 2, 3, 5])).toBe(15);
    });

    it ('Case 5', () => {
        expect(stockMax([1])).toBe(0);
    });

    it ('Case 6', () => {
        expect(stockMax([1, 2, 3, 4, 5])).toBe(10);
    });

    it ('Case 7', () => {
        expect(stockMax([5, 4, 3, 2, 1])).toBe(0);
    });
})