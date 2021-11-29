//Given an integral number, determine if it's a square number:
//Can we use Math.sqrt (square root) to determine if n is a square root?
//There is a method called isInteger() that can be used to determine if a number
//an integer. If the square root of the number is an integer, the number is a square.
//Let's see if that works. 

//No, but there is an isSquare method.
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
    }
    console.log(isSquare(10));
    