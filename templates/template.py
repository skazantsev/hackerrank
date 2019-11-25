#!/bin/python3

import math
import os
import random
import re
import sys


def solve(grid, n, m):
    pass


if __name__ == '__main__':
    n, m = map(int, input().split())
    grid = []
    for _ in range(n):
        grid.append(input())

    result = solve(grid, n, m)

    print(result)
