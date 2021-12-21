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

//Similar classes with duplicate code? Make shared code into parent class and have each class inherit from that parent class

//Example: Promotion Sender and Collection sender both have to send a notification and find users with a specific status

//Add parent class
class NotificationSender {
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender extends NotificationSender { //add 'extends' keyword to connect to parent class, used to inerhit from another class
    constructor(status) {
        super(status); //'super' keyword is a method that refers to the parent class and when followed by parentheses refers to the parent class constructor, like the 'this' keyword but referring to the specific instance of the parent class that is being inherited from

        //you must always call the parent's constructor in a class that extends another class
    }
    // sendNotification(notification) {
    //     console.log('Sending: ' + notification);
    // }

    // findUsersWithStatus(status) {
    //     let users = getUsers(status);
    //     return users;
    // }

//using parent class, put common code in parent class; that way, changes only have to be made in one place

    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
        return 0;
    }
}

class CollectionsSender extends NotificationSender {
    constructor(status) {
        super(status);
    }
    // sendNotification(notification) {
    //     console.log('Sending: ' + notification);
    // }
    // findUsersWithStatus(status) {
    //     let users = getUsers(status);
    //     return users;
    // }
    calculateFee (status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELINQUENT') {
            return 25;
        }
        return 5;
    }
}

//example: create an instance from CollectionSender
let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification.')


/* HANDLING EXCEPTIONS */

//Sometimes, codes results in errors outside the control of your code. We can use try-catch blocks to handle any exceptions that might be thrown. Exception = error, exception to what should be happening. Wrap code that might encounter an error in a TRY block; then, following the try block have a CATCH block that defines what will happen if exceptions occur in that try block.

// list.push('hello') //error is thrown here because we're trying to push to an array that doesn't exist. programs stops here.
// console.log('goodbye'); //so, 'goodbye' is never printed to the console.

//ALTERNATIVELY:

try {
    list.push('hello');
} catch (err) {
    console.log(err);    
}
console.log('goodbye'); //in this instance, error is logged out "ReferenceError: list is not defined ..." but program continues and 'goodbye' is logged to the console. The exception was HANDLED, and the program keeps running.

//we can also add a FINALLY block after try or catch; the code inside this block will run whether an exception is thrown or not.

//NOTE: try-catch blocks are designed to surround only code that are designed well but may run into problems outside our control, such as through the use of someone else's libraries or networking exceptions







