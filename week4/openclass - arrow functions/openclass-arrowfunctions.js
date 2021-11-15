//1. Convert the following function into an arrow function. Refer to the new function as returnSquareRoot.
//function myFunction(num) { return Math.sqrt(num); }

let returnSquareRoot = (num) => Math.sqrt(num);

//2. Convert the following function into an arrow function. Refer to the new function as xor.

//function myFunction(num 1, num2) {
//return num1 ^ num2;
//}

let xor = (num1, num2) => num1 ^ num2; //^ is a bitwise operator where any numeric operand "is converted into a 32-bit number and the result is
//converted back into a JS number //"Binary XOR Operator copies the bit if it is set in one operand but not both."


//3. Convert the following function into an arrow function. Refer to the new function as pythagoras.

//function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }

let pythagoras = (num1, num2) => Math.sqrt((num1*num2)+(num2*num2));


//4.Convert the following function into an arrow function. Refer to the new function as revert.

//function myFunction(value){ return !value; }

let revert = (value) => !value;


//5. Convert the following function into an arrow function. Refer to the new function as returnSum. `function addTwoInputs(a,b) { return a+b; }`

let returnSum = (a,b) => a + b;


//6. Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.

//function myFunction(num1, num2, num3) {
    //let value = 0;
    //for(let i= 0; i < num3; i++) {
        //value = (value + num2) * num1;
    //}
    //return value/(num1 * (num3*10));
//}

let fancyAlgorithm = (num1, num2, num3) =>
{  
    let value = 0;
        for(let i= 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value/(num1 * (num3*10));
}



//7. Convert the following function into an arrow function. Refer to the new function as returnNumber.

//function myFunction(num) {
    //return `Your number is $(num)`
    //}

let returnNumber = num => `Your number is ${num}`;


//8. Convert the following function into an arrow function. Refer to the new function as monthlyPayment.

//function myFunction(yearlyPayment) {
    //let monthly = yearlyPayment/12;
    //return monthly.toFixed(2);
//}

let monthlyPayment = (yearlyPayment) => (yearlyPayment/12).toFixed(2);
