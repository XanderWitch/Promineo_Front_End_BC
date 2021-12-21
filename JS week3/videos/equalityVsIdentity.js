//Three operators with "=": 1) = assignment operator, 2) == equality operator, and 3) === identity, or strict equality, operator

//Equality operator - will implicitly convert data types to see if there is a match (e.g,. "2" == 2 will evaluate to true)
//Identity operator only retuns true if its operands are of the same value AND the same type (e.g., "2" === 2 will evaluate to false).
//Therefore, it is best to use the identity operator unless there is a specific reason to use the equality operator.

console.log(2 == '2'); //true
console.log(2 === '2'); //false