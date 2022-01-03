// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    //Use the square root and Modulo functions to determin whether the number is a perfect square; if not, return -1.
    if (Math.sqrt(sq) % 1 === 0) {
        //use the math.sqrt method to determine the square root of the number, add 1, and then square the result to get the next perfect square.
        return Math.pow((Math.sqrt(sq) + 1), 2);
    } else {
    return -1;
    }
}

console.log(findNextSquare(4096));