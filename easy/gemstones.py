# https://www.hackerrank.com/challenges/gem-stones/problem
def gemstones(arr):
    return len(set.intersection(*map(lambda s: set(s), arr)))


if __name__ == '__main__':
    n = int(input())
    arr = []
    for _ in range(n):
        arr.append(input())

    print(gemstones(arr))
