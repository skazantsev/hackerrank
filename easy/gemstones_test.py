import unittest
from gemstones import gemstones


class Tests(unittest.TestCase):
    def test1(self):
        ans = gemstones(['ab', 'bba', 'abc'])
        self.assertEqual(ans, 2)

    def test2(self):
        ans = gemstones(['ab', 'bba', 'c'])
        self.assertEqual(ans, 0)

    def test3(self):
        ans = gemstones(['abcdde', 'baccd', 'eeabg'])
        self.assertEqual(ans, 2)


if __name__ == '__main__':
    unittest.main()
