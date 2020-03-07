# https://www.hackerrank.com/challenges/anagram/problem
def anagram(s):
    if len(s) % 2 == 1:
        return -1

    h = len(s) // 2
    freq = dict()
    for key in s[:h]:
        freq[key] = freq.get(key, 0) + 1

    ans = 0
    for key in s[h:]:
        val = freq.get(key)
        if val == 0 or val is None:
            ans += 1
        else:
            freq[key] = val - 1

    return ans


from collections import Counter
def anagram2(s):
    if len(s) % 2 == 1:
        return -1

    h = len(s) // 2
    s1, s2 = Counter(s[:h]), Counter(s[h:])

    ans = 0
    for key in s[h:]:
        val = s1.get(key)
        if val == 0 or val is None:
            ans += 1
        else:
            s1[key] = val - 1

    return ans



if __name__ == '__main__':
    n = int(input())
    for _ in range(n):
        print(anagram(input()))
