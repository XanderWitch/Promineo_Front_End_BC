//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

//I'll declare the array like I would any variable but with square brackets around the elements and with commas
//separating those elements.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a. Programmatically subtract the value of the first element in the array from the value in the last
//element of the array (do not use numbers to reference the last element, find it programmatically,
//ages[7] – ages[0] is not allowed). Print the result to the console.

//First, we need to find the length of the array; then we can subtract the first element (index 0) from the last element
//(which will have an index of the length of the array minus 1).

let difference = ages[ages.length - 1] - ages[0];

console.log("The difference between the last element and the first element of the ages array is " + difference + ".");

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic.

//I'll use the push method to add a number to the end of the array before repeating the above steps to check that it still works.

ages.push(112);

difference = ages[ages.length - 1] - ages[0];
console.log("The difference between the last element and the first element of the ages array is now " + difference + ".");

//1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
//First, I'll declare the sum variable for the array.

let agesSum = 0;

//Then, I'll use a loop to add all the numbers at each index of the array together. b is used here as the number of times to
//iterate through the array (I've used different variables for simple values throughout this assignment.)

for (b = 0; b < ages.length; b++) {
    agesSum += ages[b];
}

//Next, I'll calculate the average using the calculated sum and dividing it by the length of the array (i.e., the number of values)
//in the array.

const agesAverage = agesSum / ages.length;

console.log("The average value of the elements in the ages array is " + agesAverage + ".");


//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//First, I'll declare the array as instructed.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//Next, I'll declare the sum varialbe for the names array.

let namesSum = 0;

//Then, I'll run the loop to add the lengths of each item in the array based on the string method ".length", which returns the number
//of characters in a string.

for (let i = 0; i < names.length; i++) {
    namesSum += (names[i].length);
}

//Finally, I'll declare a new variable to calculate the average numbers of letters per name in the names array by dividing the
//namesSum by the number of items in the array (determined by the array method ".length").

let namesAverageLength = namesSum / names.length;

console.log("The average number of letters per name in the names array is " + namesAverageLength + ".");

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
//First, I'll declare allNames as a blank string variable.

let allNames = "";

//Next, I'll use a loop to iterate through all items in the array like we did in exercise 2 and then concatenate them together using the addition
//assignment operator.

for(let arrayIndex = 0; arrayIndex < names.length; arrayIndex++) {
    allNames += names[arrayIndex] + " "; 
}

console.log(allNames);


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//The map method is useful here because it loops through an existing array to create a new array consisting of the returned values.

let nameLengths = names.map(function(element) {
    return element.length;
})


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
//The reduce method is helpful in this case because it passes a return value from a calculation back to the function as it iterates through the loop.

let nameLengthsSum = nameLengths.reduce(function(accumulator, currentTotal2) {
    return accumulator + currentTotal2;
})
console.log("The sum of the lengths of each name in the names array is " + nameLengthsSum + ".");


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
//First, I'll declare concatenatedWord as a blank string variable.

let concatenatedWord = "";

//Next, I'll create the function indicated above with a loop that will loop n number of times to concatenate the word string upon itself each
//time the loop is iterated.

function concatWord(word, n) {
    for(concatNumber = 1; concatNumber <= n; concatNumber++) {
        concatenatedWord += word;
    }
    return concatenatedWord;;
}

//Next, I'll call the function with test values and print the results to the console.

concatWord('Yo', 7);
console.log(concatenatedWord);


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name
//(the full name should be the first and the last name separated by a space).
//This function is fairly simple, with two elements passed in and returning a string.

function fullName(firstName, lastName) {
    return fullName = firstName + " " + lastName;
    }

//Here, I'll call the function with sample input and print the results to the console to test it.

fullName('Harry', 'Dresden');
console.log(fullName);


//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//First, I'll declare numberArraySum as zero.

let numberArraySum = 0;

//Next, I'll write the function, which will loop through each number in the array and add its value to numberArraySum using
//the addition assignment operator. I'll use an operation (numberArraySum > 0) to determine the Boolean return value of the
//function.

function isArraySumOver100(numberArray) {
    for(x = 0; x < numberArray.length; x++) {
        numberArraySum += numberArray[x];
    }
    return numberArraySum > 100;
}

//Finally, I'll print the results to the console by calling a function with the array contained within the call. The array could also be
//defined separately and run with its name as the argument of the function.

console.log("The summ of all the numbers in the array is greater than 100: " + isArraySumOver100([1, 9, 8, 39, 7, 7, 7, 5, 3, 7, 9, 7]) + ".");


//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

//First, I'll declar the numberArraySum2 as zero.

let numberArraySum2 = 0;

//Next, as before I'll write the function, which will loop through each number in the array and add its value to numberArraySum2 using
//the addition assignment operator. However, instead of returning a Boolean, I'll code it to return the average value of the numbers in
//the array.

function averageOfNumberArray(anotherNumberArray) {
    for(y = 0; y < anotherNumberArray.length; y++) {
        numberArraySum2 += anotherNumberArray[y];
        }
    return numberArraySum2 / anotherNumberArray.length;
}

//Last, we'll print the results to the console.

console.log("The average of the numbers in this array is " + averageOfNumberArray([1, 9, 8, 29, 7, 7, 7, 5, 3, 7, 9, 7]) + ".");


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//First, I'll declare two number variables as zero; these variables  will be used to sum the total value of numbers within the array.

let totalOfNumberArray1 = 0;
let totalOfNumberArray2 = 0;

//Next, I'll build the function with two for loops that will add all the numbers in each array and then return a Boolean value stating whether the average of the
//first array is greater than the average of the second.

function compareNumberArrayAverages(numberArray1, numberArray2) {
    for(z = 0; z < numberArray1.length; z++) {
        totalOfNumberArray1 += numberArray1[z];
        }
    let averageOfNumberArray1 = totalOfNumberArray1 / numberArray1.length;

    for(a = 0; a < numberArray2.length; a++) {
            totalOfNumberArray2 += numberArray2[a];
            }
    let averageOfNumberArray2 = totalOfNumberArray2 / numberArray2.length;            

    return averageOfNumberArray1 > averageOfNumberArray2;
}

//Finally, I'll print the results to the console.

console.log("The average of the elements in the first array is greater than the average of the elements in the second array: " + compareNumberArrayAverages([1, 3, 9, 4, 8, 7, 2, 5, 6, 10, 3, 8], [2, 3, 6, 5, 7, 9, 7, 5, 9, 1, 5, 6] + "."));


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//This function must take two elements and return a Boolean value that uses a logical and statement to determine if both conditions are met.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && (moneyInPocket > 10.50);
}

//Finally, I'll print the results to the console.

console.log("I will buy a drink: " + willBuyDrink(false, 11.50) + ".");


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//Problem: A community theater only has a small number of male actors available but a large number of female actors; they need a quick way to tell if they can cast a play by looking at its roles;
//They know that they have 3 males and 12 females available for the next play. They want to make sure they have enough actors to cast it. The totalNumberofRoles includes gender-neutral or
//gender-swappable roles.

//First, I'll declare our returned castingResult as a blank string.

let castingResult = ""

//Next, I'll create a function using an if...else statement that will take the number of male roles, the number of female roles, and the total number of roles to determine whether the theater can cast a given play.

function willCastPlay(numberOfMaleRoles, numberOfFemaleRoles, totalNumberOfRoles) {
    if (numberOfFemaleRoles <=12 && numberOfMaleRoles <= 3 && totalNumberOfRoles <= 15) {
        castingResult = "We can cast this play!"
    } else {
        castingResult = "We don't have the actors to cast this play."
    }
    return castingResult;
}

//Last, I'll print the results to the console.

console.log(willCastPlay(2, 9, 15));
