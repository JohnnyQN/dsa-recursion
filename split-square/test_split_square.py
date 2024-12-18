import unittest
from simplify import simplify

class TestSplitSquare(unittest.TestCase):
    def test_fully_collapsible_square(self):
        square = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
        result = simplify(square)
        self.assertEqual(result, 1)

    def test_non_collapsible_square(self):
        square = [1, 0, 1, 0]
        result = simplify(square)
        self.assertEqual(result, [1, 0, 1, 0])

    def test_nested_square(self):
        square = [[1, 1, 1, 1], [1, 1, 1, 1], 1, 1]
        result = simplify(square)
        self.assertEqual(result, 1)

    def test_mixed_nested_square(self):
        square = [[1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1]]
        result = simplify(square)
        self.assertEqual(result, [[1, 0, 1, 0], [1, 0, 1, 0], 1, 1])

    def test_invalid_square(self):
        with self.assertRaises(ValueError):
            simplify([1, 2, 3])  # Invalid list length

if __name__ == "__main__":
    unittest.main()
