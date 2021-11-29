// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

const n = 34597;

//split this into an array using the split string method


function digitize(n) {
    //first, convert the numbers to a string so they can be split into numberArray
    const numbers = n.toString(); 
    const numberArray = numbers.split('');
    
    //next, use the reverse method to reverse the array in place
    const digitized = numberArray.reverse();
    
    //next, this for loop will turn all elements in the array back into numbers and return a new
    //array with the appropriate numbers
    const numeralDigitized = [];
    for (i = 0; i < digitized.length; i++) {
        numeralDigitized.push(Number(digitized[i]));
    }
    return numeralDigitized;
}
console.log(digitize(n));
   