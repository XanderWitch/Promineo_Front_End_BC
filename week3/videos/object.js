//OBJECTS are structures that logically group data and functionality together.

//OBJECT LITERALS (the code within the outer curly braces below) make up an object's properties, or methods, and functionality by wrapping a comma-separated
//list of key-value pairs within curly braces.

//We define objects as we would variables; however, objects are made up of key-value pairs separated by commas and surrounded by curly braces.
//KEYS are the naems of the properties, or methods, on the object.
//VALUES are the values of the keys or the functions that make up the method.

let myDesk = {
    height: 36,
    width: 60,
    depth: 30,
    weight: 50,
    color: 'brown',
    isClean: false,
    printCleanState: function() {
        console.log(this.isClean);
    }
}

console.log(myDesk.depth);
myDesk.printCleanState();

//methods vs functions - a method is a function that BELONGS to an object, whereas a function is an independent piece of functionality