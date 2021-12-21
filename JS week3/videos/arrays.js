//define an array like other variables but with square brackets
var customerNames = [];

//add elements to an array through 'push method'
customerNames.push('Janell Robisch');
customerNames.push('Linda Layne');

//using a zero-based index, refer to elements in the array by their position
console.log(customerNames[0]);

//use loops to perform actions on each element in the array without having to repeat the code
//as you would need to with separate variables
for(let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

//you can use a FOR OF loop to shorten this even more and get rid of i altogether, like this:
for(cName of customerNames) {
    console.log(cName);
}