//how to write a function; note that nothing happens until you call that function. this is just the set of instructions for the computer to
//run when the function is called

function firstFunction() {
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
}

//to call a function
firstFunction();

//to create the ability to add input, use parameters in the function
//this function creates a full name by concatenating two parameters
function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

//don't forget to call the function to exectute it, but this time, add arguments
createFullName('Mommy', 'Dearest');

//Sometimes a function will be asked to return a value through a return statement. The return statment ends the function and returns
//whatever value follows. This value can then be used outside the function.

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
    }

    console.log(createFullName('Mama', 'Mia'));

//You can also store this returned value in a variable to use later.
var fullName = createFullName('Zoe', 'Reynolds');
console.log('Welcome, ' + fullName);

//finally, give functions descriptive names that describe exactly what the function is doing
