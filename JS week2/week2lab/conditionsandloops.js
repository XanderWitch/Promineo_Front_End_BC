// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100

let speedLimit = 65;
let mySpeed = 90;


// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"

if(mySpeed > speedLimit) {
    console.log("Slow Down! Mom is mad!");
} else if(mySpeed === speedLimit) {
    console.log("Everyone is happy!");
} else {
    console.log ("Speed up! Dad is mad!");
}


// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value

let alarmSet = true;
let openDoor = true;

// using a conditional, determine if alarm is set. 
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.

if (alarmSet && openDoor) {
    console.log("Sound Alarm!")
} else {
    console.log("Everything is fine.")
}

//**don't need "== true" for Boolean values; also for string and number values, no operator just checks to see if it is hold any value (which will be interpreted as 'true')**



// create two variables, username and password
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"

let username = "Timmy456";
let password = "12345";

if((username === "Tommy123" && password === "12345") || (username === "Timmy456" && password === "6789")) {
    console.log("Admin Login Successful");
} else {
    console.log("Admin Access Denied");
}

// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console

let studentGrade = 11;
let studentClass;

switch(studentGrade) {
    case "K":
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log('Error');

}

console.log(studentClass);



// write a for loop that will iterate backwards from 10 to -10

for(let numberOne = 10; numberOne >= -10; numberOne--) {
    console.log(numberOne);
}


// write a do/while loop that prints 1 through 50

let i = 1;
do {
    console.log(i);
    i++;
} while(i<=50);


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4

let i2 = 1;
do {
    console.log(i2 % 4);
    i2++;
} while(i2<=50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test

    for(let i = 110; i > 10; i--){
        console.log(i);
    } 






