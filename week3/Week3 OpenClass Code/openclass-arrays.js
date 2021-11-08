//Given the array, studentList, add the name "Mary".
//Do not edit the array in its current state. You must edit using a method of the Array object.

//given list
//let studentList = ["Allen", "Jessica", "Eddie", "Sarah"] - commented out to not interfere with later exercise

studentList.push('Mary');
console.log(studentList);


//Create an array called groceryList and add "granola", "milk", and "eggs"

let groceryList = ["granola", "milk", "eggs"];

//Write a function called sortArray that accepts an array as an argument. Within the function, sort the array alphabetically or numerically. Return the sorted array.

function sortArray(array) {
    return array.sort(); //the method 'sort' sorts automatically, depending on the data type, so it can sort alphabetically or numerically
}

//Given the array, studentList, remove the name "Eddie".
//Do not edit the array in its current state. You must edit using a method of the Array object.

//given list
let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]; 

studentList.splice(2, 1);
