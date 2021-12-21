//notes - week 5 class

//questions

//ARE CLASSES OOP?
//OOP and javascript objects are related but distinct concept
//JS objects are a set of key-value pairs; like hash maps or dictionaries in other languages
//OOP is related to classes and classes in JS. In OOP, objects are instances of classes.

//LAST WEEK'S QUIZ - Evan's code copied in

// The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. To verify, you've been asked to write a function that processes an array of customer objects and return a new array that contains only customers that match ANY of the following criteria:

// name starts with a 'C' (upper or lowercase)
// address contains no undefined fields
// the city is Peoria and the state is AZ
// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
// The array of customer objects will have the following schema:

// const customers = [
//     {
//       name: "Sam",
//       address: {
//         street: "1234 W Bell Rd",
//         city: "Phoenix",
//         zip: "85308",
//         state: "AZ",
//       },
//       membershipLevel: "GOLD",
//       age: 32,
//     },
//     //more customers with the same schema
//   ];
  
//   function customerMeetsCriteria(customer) {
//     // name starts with a 'C' (upper or lowercase)
//     if (customer.name[0].toLowerCase() === "c") {
//       return true;
//     }
  
//     // address contains no undefined fields
//     if (
//       customer.address.street &&
//       customer.address.city &&
//       customer.address.zip &&
//       customer.address.state
//     ) {
//       return true;
//     }
  
//     // the city is Peoria and the state is AZ
//     if (customer.address.city === "Peoria" && customer.address.state === "AZ") {
//       return true;
//     }
  
//     // membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
//     if (
//       customer.membershipLevel === "GOLD" ||
//       customer.membershipLevel === "PLATINUM" ||
//       (customer.age < 29 && customer.membershipLevel === "SILVER")
//     ) {
//       return true;
//     }
  
//     return false;
//   }
  
//   function filterCustomers(customers) {
//     const output = [];
  
//     for (let i = 0; i < customers.length; i++) {
//       if (customerMeetsCriteria(customers[i])) {
//         output.push(customers[i]);
//       }
//     }
  
//     return output;
//   }
  
//   filterCustomers(customers);


  //not sure if I got it all but see 'quizhelp' in week 4 for my version after talking to mentor Jolene



//JASON's QUESTION - create menu app
//create a menu app that can view, add, and remove elements

class Event {
    constructor(title, date) {
      this.title = title; //string
      this.date = date; //string
    }
  }
  
  class Event {
    constructor(title, date) {
      this.title = title; //string
      this.date = date; //string
    }
  }
  
  class EventOrganizer {
    constructor() {
      this.events = [];
    }
    addNewEvent(event) {
      if (event.title && event.date) {
        this.events.push(event);
      }
    }
    removeEvent(eventName) {
      this.events = this.events.filter((event) => {
        return event.title !== eventName;
      });
    }
  }
  
  const myEventOrganizer = new EventOrganizer();
  const firstEvent = new Event("birthday", "11/11/2021");
  myEventOrganizer.addNewEvent(firstEvent);
  const thanksgiving = new Event("thanksgiving", "11/25/2021");
  myEventOrganizer.addNewEvent(thanksgiving);
  
  myEventOrganizer.removeEvent("birthday");
console.log(myEventOrganizer.events);

// //will post reading material about filter and will post the code in slack (evan's code copied in above)


// //FILTER REVIEW - original array is untouched, returns new array

// const array = [1, 2, 3, 4, 5];

// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(array.filter(isEven));
// console.log(array);



//***Remember to break problems down into action steps with pseudocode and then take one step at a time ***//



/* PROMISES * - a review /

/* compressed, will post more resources later */

//promise is a representation of a value does not exist yet, for example, while getting data from an API

function getMovieFacts() {
    return fetch("http://www.omdbapi.com/?t=fast&apikey=ba900418");
}

//callbacks, pass a function into another function

//.then allows a linear callback result in a chain instead of nested

const facts = getMovieFacts().then((result) => { //then deals with promises
    result.json().then(result => { //decode result
        console.log(result);
    });
});

//Let Evan know if there is anything to prepare for next week/question. JS is a multiparadigm language - covers different styles, including OOP.
    //eg. - OOP
    //eg. - Best practices for handling exceptions?

    




