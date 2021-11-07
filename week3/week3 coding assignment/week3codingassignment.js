//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a. Programmatically subtract the value of the first element in the array from the value in the last
//element of the array (do not use numbers to reference the last element, find it programmatically,
//ages[7] – ages[0] is not allowed). Print the result to the console.

//first, we need to find the length of the array; then we can subtract the first element (index 0) from the last element (index agesLength - 1)

let difference = ages[ages.length - 1] - ages[0];
console.log("The difference between the last element and the first element of the ages array is " + difference + ".");

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push(112);
difference = ages[ages.length - 1] - ages[0];
console.log("The difference between the last element and the first element of the ages array is now " + difference + ".");

//1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

const arraySum = ages.reduce(function(element, currentTotal) {
    return element + currentTotal
})

const arrayAverage = arraySum / ages.length;
console.log("The average value of the elements in the ages array is " + arrayAverage + ".");



//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let namesSum = 0;
for (let i = 0; i < names.length; i++) {
    namesSum += (names[i].length);
}
let namesAverageLength = namesSum / names.length;
console.log("The average number of letters per name in the names array is " + namesAverageLength + ".");

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let allNames = "";
for(let arrayIndex = 0; arrayIndex < names.length; arrayIndex++) {
    allNames += names[arrayIndex] + " "; 
}
console.log(allNames);

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = names.map(function(element) {
    return element.length;
})

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let nameLengthsSum = nameLengths.reduce(function (accumulator, currentTotal) {
    return accumulator + currentTotal;
})
console.log("The sum of the lengths of each name in the names array is " + nameLengthsSum + ".");