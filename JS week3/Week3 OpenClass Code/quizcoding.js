let groceryItems = ['milk', 'eggs', 'snickers', 'soda', 'hairbrush']

for(i = 0; i < groceryItems.length; i++) {
    console.log(groceryItems[i]);
}


//Write a function that takes two arguments, base and exponent, that are each a number.
//This function should return the value of the base raised to the power of the exponent.

function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(1, 96));
console.log(power(4, 7));

//Given the following customer object, write code inside the object that would allow a user of the object to print out all of the customer's contact information including name, email address, and phone number.

  let customer = {

    name2: "Tom",
  
    email: "Tom@promineotech.com",
  
    phone: "602-123-0011",
  
    // Insert your code below this line
  
   contactInformation: function(contactInfo) {
       return "Name: " + this.name2 + ", Email: " + this.email + ", Phone: " + this.phone;
   }
   
    
    // Insert your code above this line
  
  }
  console.log(customer.contactInformation());