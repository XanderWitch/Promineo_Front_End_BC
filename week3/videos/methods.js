//MAP METHOD - is used to invoke a function for each element (call it what you like)
//in an array and then create a new array from the returned values of each
//iteration of the function

let names = ['Harry', 'Murphy', 'Bob', 'Molly', 'Butters'];
let lengths = names.map(function(x) {
    return x.length;
})
console.log(lengths);


//REDUCE METHOD - useful for taking ALL of the values in an array and reducing
//them down to one value as a result of a reducer function that we pass in as an argument
//Good for summing the values, finding the average of all the values, or returning an object with
//properties composed of multiple objects

//to find the sum of our lengths array

let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, 10);
console.log(sum);

//the 10 after the comma above is an example of the initialValue parameter, one of the
//parameters that can be used with the reduce method: (1) accumulator - used to accumulate
//all the values together, is the result of the previously returned value, (2) currentValue
//the current element in the array, (3) currentIndex, (4) the array itself, and (5) initial value


//FOR EACH METHOD - invokes a function for each element in an array but does not return a new
//array from the results. Perfect for when you don't need to store the values returned from the
//function. For example, if you just wanted to log out each element in the array:

names.forEach(function(x) {
    console.log(x);
})

//FILTER METHOD - invokes a function that returns a Boolean value for each element
//in an array; the filter method returns a new array that contains all elements from
//the original array that the invoked function returned TRUE. For example, lets filter
//out the names from our names array that have an odd number of characters.

let odds = names.filter(function(x) {
    return x.length % 2 == 1;
    })
    console.log(odds);


    //SPLICE METHOD - can be used to alter the contents of an array by adding, modifying,
//or removing elements from an array at a specific location. Parameters include the index
//to start at and the number of elements to remove. It is highly recommended to read
//the MDN documentation on "JS Arrays," which includes many other methods available.

//an example of splice to remove an element from our names array, starting at index 1
//and removing 1 element

let removedElement = names.splice(1,1);
console.log(removedElement);