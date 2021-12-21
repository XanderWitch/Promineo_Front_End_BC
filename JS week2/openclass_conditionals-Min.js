//Write an IF statement that checks to see if there is enough money to cover the cost of a soda. If so, print "I can buy a soda!".
//If not, print "I need to earn some more money!"

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var money = parseInt(input[0]);
var costOfSoda = parseInt(input[1]);

//write your code here
if(money >= costOfSoda) {
    console.log("I can buy a soda!");
} else {
    console.log("I need to earn some more money!");
}


//Write an if statement that compares num1 to num2 and prints the larger of the two. If they are equal, print "Num1 is equal to Num2".

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

//write your code here
if(num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("Num1 is equal to Num2");
}


//Write a series of IF/ELSE IF statements that check the numberGrade and assign letterGrade to a string of the corresponding letter grade. Print the letter grade to the console.
//A: 90+, B: 80-89, C: 70-79, D: 60-69, F: 0-59. Make sure to use a capital letter for the grade.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var numberGrade = parseInt(input[0]);
var letterGrade;

//write your code here
if(numberGrade >= 90) {
    letterGrade = "A";
} else if (numberGrade >= 80) {
    letterGrade = "B";
} else if (numberGrade >= 70) {
    letterGrade = "C";
} else if (numberGrade >= 60) {
    letterGrade = "D";
} else {
        letterGrade = "F";
}    
console.log(letterGrade);


//Write an IF/ELSE statement that prints the smaller of the two given inputs, num1 and num2. If they are the same, print "same".
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

//write your code here
if(num1 < num2) {
    console.log(num1);
} else if(num2 < num1) {
    console.log(num2);
} else {
    console.log("same");
}


//Write a switch statement to check the value of monthNumber and then when the match is made, print out that month in a string (i.e. "July").
//For example, if the monthNumber is 5, the console should print out "May". If the number is not 1 through 12, print out "Invalid Month".

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var monthNumber = parseInt(input[0]);


//Write your code here
switch(monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;                    
    case 3:
        console.log("March");
        break;  
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
    }