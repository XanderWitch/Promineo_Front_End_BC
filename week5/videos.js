/* OBJECT-ORIENTED PROGRAMMING

DVD Player
-------------------------
Height
Weight
Width
Color

Play
Pause
Fast-Forward
Stop
Rewind

//one object, such as the DVD player, can interact with other objects,
//such as a DVD player

DVD
-----
Movie Length
Image
Size


*/

/* CLASSES */

class Student { //syntax keyword 'class' followed by name of the class - initial caps/Pascal case
    constructor(firstName, lastName, phoneNumber, grade) { //'constructor' keyword, set properties for class, constructor method is what is called when we create an instance of "Student" and where all properties are initialized
        this.firstName = firstName; //assigning values that come in from the argument instead of a literal value
        this.lastName = lastName //'this' keyword specifies the field that comes along with the instance
        this.phoneNumber = phoneNumber;
        this.grade = grade;
}
//now let's add functionality
    introduce() { //no need for 'function' keyword (it's a method here, aka, a function that belongs to a class)
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}.`); //each instance of the class will have its own specific values; this allows the class to create many objects/instances as we want 

    }

}

//let's create a few instances of this class and pass the needed values into the constructor
let student1 = new Student('Kim', 'Gail', '5555555555', 'A+'); //note that we call the name of the class followed by parentheses, not constructor; the constructor is invoked
let student2 = new Student('Jan', 'Lily', '5555551111', 'A');
let student3 = new Student('Alan', 'Jay', '5555555555', 'A+');

//Call method on each student
student1.introduce();
student2.introduce();
student3.introduce();

//when to create a class? Each class should be in charge of one thing. Anytime you need a new concept that needs properties and functionality, create a class for it. e.g., for a card game, classes for deck, card, player, etc.

//'new' keyword instantiates a new instance of our class.


/* INHERITANCE */