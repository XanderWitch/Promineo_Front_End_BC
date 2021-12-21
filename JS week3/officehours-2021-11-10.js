//Notes on the switch statement/month number to name from OpenClass

//switch(monthString) {
//    case 1:
//        console.log("January"); //save a step here by just console logging
//        //instead of assigning a new variable 
//        break;
//    case 2:

//}

//Notes on week 3 coding assignment - sums

//Comment when you have problems to indicate what you are trying, especially if you don't
//understand why something is working or if it's not working

let numberArray = [75, 10, 20, 50];
//write her version, which used the reduce method, in simpler code

function sumArray(numberArray) {
    //need to add all the numbers to see if they sum to greater than 100
    //can write a for loop to iterate over the array
    var subtotal = 0;
    for(let i = 0; i < numberArray.length; i++) {
        subtotal += numberArray[i];
        console.log(subtotal);
    }
    
}
if (subtotal > 100) {
    console.log(true);
}

//using array methods