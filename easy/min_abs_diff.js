// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

// the minimum array length is 2
function solve(a) {
    a.sort();
    let ans = Math.abs(a[1] - a[0]);
    for (let i = 0; i < a.length - 1; ++i) {
        const diff = Math.abs(a[i + 1] - a[i]);
        if (diff < ans) {
            ans = diff;
        }
    }
    return ans;
}

describe ('Test min abs difference', () => {
    it ('Case 1', () => {
        expect(solve([-2, 2, 4])).toBe(2);
    });

    it ('Case 2', () => {
        expect(solve([3, -7, 0])).toBe(3);
    });

    it ('Case 3', () => {
        expect(solve([3, -7, 0, -6])).toBe(1);
    });

    it ('Case 4', () => {
        expect(solve([-5, 0])).toBe(5);
    });
})