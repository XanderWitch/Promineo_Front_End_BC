var string="This is not a pangram. This is not a pangram.";

var cleanString = string.toLowerCase().replaceAll(" ", "").replace(/[^\w\s]|_/g, "");

var stringArray = Array.from(cleanString).sort();

console.log("string, stringArray: ", cleanString, stringArray);


// Remove duplicates in array using forEach
let stringArrayNoDupes = [];  
stringArray.forEach((item) => {  
   if(!stringArrayNoDupes.includes(item)){  
    stringArrayNoDupes.push(item);  
   }  
});  
console.log("No Dupes: ", stringArrayNoDupes); 

//Output: ['Lion', 'Rabbit', 'Mouse', 'Monkey', 'Ape']  