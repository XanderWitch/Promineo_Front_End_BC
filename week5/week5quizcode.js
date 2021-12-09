// You are working for an event scheduling company and were asked to create something that helps organize events better. The app you are working on already has an Event class as follows:


// class Event {
//   constructor(title, date) {
//     this.title = title; //string
//     this.date = date; //string
//   }
// }
// Your task is to create a class named EventOrganizer that contains a property called events (an array of Events) and two methods: addNewEvent, and removeEvent.

// addNewEvent should take an event and add it to the events array ONLY if an event with the same title doesn't exist already.

// removeEvent should take a string representing the event title and remove the event with the matching title.

class Event {
  constructor(title, date) {
    this.title = title; //string
    this.date = date; //string
  }
}


    // create a class named EventOrganizer that contains a property called events (an array of Events) and two methods: addNewEvent, and removeEvent.

class EventOrganizer {

    constructor() {
        this.events = []; //array of events
    }

    // addNewEvent should take an event and add it to the events array ONLY if an event with the same title doesn't exist already

    // addNewEvent(event) {
    //     if (event.title !== this.events.title) {
    //       this.events.push(event);
    //     }
    // }
    
    addNewEvent(event) {
    //     if (event.title != this.events.title) {
    //       this.events.push(event);
    //     }
    //   }
        const eventExists = this.events.some(event => this.events.title === event.title);
        if (eventExists) {
            return false;
        }
        this.events.push(event);
    }

///this part doesn't work and what Evan did is not the same *sigh*

    // removeEvent should take a string representing the event title and remove the event with the matching title.

    removeEvent(eventName) {
        this.events = this.events.filter((event) => {
          return event.title !== eventName;
        });
      }

    }

//create an insanct/object of Event Organizer/instantiate it
const companyEventOrganizer = new EventOrganizer();

//create some events/instances/objects of Events
const holidayEvent1 = new Event("First Night of Hanukkah", "November 28, 2021");
const holidayEvent2 = new Event("Christmas", "December 25, 2021");
const holidayEvent3 = new Event("New Year's Eve", "December 31, 2021");
const holidayEvent4 = new Event("Christmas", "December 25,2020");

console.log(companyEventOrganizer.events);


//now add these instances with the companyEventOrganizer addNewEvent method 
companyEventOrganizer.addNewEvent(holidayEvent1);
companyEventOrganizer.addNewEvent(holidayEvent2);
companyEventOrganizer.addNewEvent(holidayEvent3);

//print what's in the events array
console.log(companyEventOrganizer.events);

//try adding an event with the same title
companyEventOrganizer.addNewEvent(holidayEvent4);

//print what's in the events array
console.log(companyEventOrganizer.events);

//now remove one these instances with the companyEventOrganizer removeEvent method using event title
//companyEventOrganizer.removeEvent("Christmas");

companyEventOrganizer.removeEvent("New Year's Eve");

//print what's left of events array
console.log(companyEventOrganizer.events);