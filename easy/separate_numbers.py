# https://www.hackerrank.com/challenges/separate-the-numbers/problem
def solve(s):
    for k in range(len(s) // 2):
        first = cur = s[0:k+1]
        j = k+1
        found = True
        while j < len(s):
            cur = str(int(cur) + 1)
            # print(str(int(cur) - 1), cur, s[j:j+len(cur)])
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
