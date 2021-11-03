//Map Method - is used to invoke a function for each element (call it what you like)
//in an array and then create a new array from the returned values of each
//iteration of the function

let names = ['Harry', 'Murphy', 'Bob', 'Molly', 'Butters'];
let lengths = names.map(function(x) {
    return x.length;
})
console.log(lengths);

//***
//Reduce Method - useful for taking ALL of the values in an array and reducing
//them down to one value as a result of a reducer function that we pass in as an argument
//Good for summing the values, finding the average of all the values, or returning an object with
//properties composed of multiple objects

//to find the sum of our lengths array

let sum = lengths.reduce(function(accumulator, currentValue))
