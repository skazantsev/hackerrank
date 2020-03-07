# https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
def theLoveLetterMystery(s):
    ans = 0
    start, end = 0, len(s) - 1
    while start < end:
        ans += abs(ord(s[start]) - ord(s[end]))
        start += 1
        end -= 1
    return ans


if __name__ == '__main__':
    n = int(input())
    for _ in range(n):
        print(str(theLoveLetterMystery(input())))
