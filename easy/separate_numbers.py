# https://www.hackerrank.com/challenges/separate-the-numbers/problem
def solve(s):
    for i in range(len(s) // 2):
        first = cur = s[:i+1]
        j = i+1
        found = True
        while j < len(s):
            cur = str(int(cur) + 1)
            if cur != s[j:j+len(cur)]:
                found = False
                break
            j += len(cur)

        if found:
            return f"YES {first}"

    return "NO"


if __name__ == '__main__':
    n = int(input())
    items = []
    for _ in range(n):
        items.append(input())

    print('\n'.join(map(solve, items)))
