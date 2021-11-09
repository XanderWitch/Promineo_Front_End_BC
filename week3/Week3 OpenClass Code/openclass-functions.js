//Write a function called loopUntilX that takes one parameter.
//Within the function, write a loop that loops as many times as
//the passed in value, starting at 0. Within the loop,
//print the number of iterations to the console.
//Once the loop is done, return true.

//write your code below

function loopUntilX(loops) {
    for(i = 0; i < loops; i++) {
        console.log(i);
    }
    return true;
}

console.log(loopUntilX(5));

//Create a function called findCircumference that returns the circumference of a circle if given the radius.
//The formula to find the circumference of a circle is PI * 2r where r is the radius.

function findCircumference(radius) {
    return circumference = Math.PI * 2 * radius;  //Math.PI gives PI in JS
}

console.log(findCircumference(3));

//Write a function called speakFriend that takes one parameter. Return the string "Access Denied". But, if the passed in value is "Mellon", return "Enter"

function speakFriend(password) {
    if(password === 'Mellon') {
        return 'Enter'
    } else {
        return 'Access Denied'
    }
}

//instructor's solution for above
function speakFriend(a){
if(a == "Mellon"){
    return "Enter";
} 
return "Access Denied";
}

//Note: A function will end once returned. Anything after will be ignored and the function will exit.


//Create a function called isBlue. It takes one parameter. Return true if it is passed "blue", otherwise return false.
//The passed value can be "blue" with any of the letters capitalized as well. (i.e."Blue", "bLue", "BLUE", etc…)
//All forms of the word blue should return true. Use toLowerCase() on the passed value to accomplish this.
//For example, myVariable.toLowerCase() will convert whatever myVariable is to all lowercase.

function isBlue(color) {
   if (color.toLowerCase() === 'blue') {
        return true;
    }
    return false;
}

//instructors solution:

function isBlue(var1){
    return var1.toLowerCase() === "blue";
}

array = ['orange', 'blue', 'yellow']

function stringFind(array, string) {

    for (i = 0; i < array.length; i++) {

         if(array[i] === "string") {

               return i

         }

    return -1;

}
}
console.log(stringFind('blue'))

//Create a function named checkout that accepts 2 variables named 
//cardBalance and price. If the price is more than the card balance,
//return false. Otherwise, return the new card balance.

function checkout(cardBalance, price) {
    if (price > cardBalance) {
    return false;
    
    } else {
        cardBalance -= price;
        return cardBalance;
}}
console.log(checkout(500, 400, 60));

//Write a function called sumOfTwo that takes two numbers as parameters
//and returns the sum.

function sumOfTwo(num1, num2) {
    return num1 + num2;
}
console.log(sumOfTwo(3));

//Create a function named returnSum that accepts 3 integer variables named
//num1, num2, and num3. Return the sum of the three variables.

function returnSum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(returnSum(67, 43, 92));