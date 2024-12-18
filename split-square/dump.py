"""Print each square on a new line.

A simple square will only be one line::

    >>> dump(0)
    0

    >>> dump(1)
    1

A split square will use four lines::

    >>> dump([0, 1, 0, 1])
    0
    1
    0
    1

A nested split square will use one line per square::

    >>> dump([0, 0, 0, [1, 1, 1, 1]])
    0
    0
    0
    1
    1
    1
    1

Of course, these can nested deeply and still work::

    >>> dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])
    0
    0
    0
    1
    1
    1
    0
    0
    0
    1
    1
    1
    1
"""


def dump_square(square, indent=0):
    """
    Pretty-prints a split square for visualization.

    Each level is indented for better readability.
    """
    prefix = " " * indent
    if isinstance(square, int):
        print(f"{prefix}{square}")
    elif isinstance(square, list):
        if len(square) == 4:  # Properly formatted split square
            for sub_square in square:
                dump_square(sub_square, indent + 2)
        else:
            # Allow partial squares for visualization
            for sub_square in square:
                dump_square(sub_square, indent + 2)
    else:
        raise ValueError("Invalid square format.")

if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; NICE JOB!\n")

