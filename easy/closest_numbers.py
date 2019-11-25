import sys
from itertools import islice


def solve(arr):
    arr.sort()
    ans = []
    min_diff = sys.maxsize
    prev = arr[0]
    for cur in islice(arr, 1, None):
        diff = cur - prev
        if diff == min_diff:
            ans.append(prev)
            ans.append(cur)
        elif diff < min_diff:
            min_diff = diff
            ans = [prev, cur]
        prev = cur

    return ans


if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    ans = solve(arr)
    print(' '.join(map(str, ans)))
