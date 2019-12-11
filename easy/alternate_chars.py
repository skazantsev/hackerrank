# https://www.hackerrank.com/challenges/alternating-characters/problem
from functools import reduce


def alternatingCharacters(s):
    return reduce(lambda ans, cur: [ans[0] + 1, cur] if ans[1] == cur else [ans[0], cur], s, [0, ''])[0]


if __name__ == '__main__':
    n = int(input())
    for _ in range(n):
        print(str(alternatingCharacters(input())))
