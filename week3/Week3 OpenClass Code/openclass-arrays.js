//Given the array, studentList, add the name "Mary".
//Do not edit the array in its current state. You must edit using a method of the Array object.

//given list
let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]

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
//let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]; 

studentList.splice(2, 1);

//Write a function called reverseArray that accepts an array as an argument.
//Within the function, reverse the array. Return the reversed array.

function reverseArray(array) {
    array.reverse();
    return array; 
}
console.log(reverseArray([9, 8, 7, 6]));

//Using the given function, gradList, add the following names to the passed array:
//Mary, Steven, Eddie. Sort the remaining students from Z-A.
//The passed array is the graduates variable. First add the names to the
//graduates array using push. Then sort the names and finally return the
//reversed array.


function gradList(graduates){
    //write your code here
    graduates.push('Mary', 'Steven', 'Eddie');
    graduates.sort();
    graduates.reverse();
    return graduates;
}
console.log(gradList(['Sarah', 'Brock', 'Greg', 'Gerty']));

//Write a function called printArray that accepts an array as an
//argument. Create a loop that will print each value of the
//passed in array.
//Do not edit the array in its current state. You must use a
//method of the Array object.


function printArray(input) {
    for(i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
    return
}
printArray([1, 2, 3, 4]);

//Given the attendanceList array, replace the first element in the array
//with "Steven".
//Remember, arrays are 0 base index, meaning the first element is in position
//0. For example, array[0] accesses the first element.

//attendanceList[0] = 'Steven';

//Write a function called joinArrays that accepts two arrays as arguments.
//Join the two arrays and return the new array. You must use a method of the
//Array object

function joinArrays(array1, array2) {
    let joinedArray = array1.concat(array2);
    return joinedArray;
}
console.log(joinArrays([1, 2], [3, 4]));