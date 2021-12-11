class Library {
    constructor() {
        this.availableBooks = [];
    }

    getAvailableBooks() {
        return this.availableBooks;
    }
    addBook(title) {
        this.availableBooks[title] = true;
    }
    
}

const evansLibrary = new Library();

//w/o getters and setters
evansLibrary.availableBooks.push('Moby Dick');
evansLibrary.availableBooks.push('Hitchhikers Guide');
//requires knowledge by users of how the information is stored, so the code that uses the class will be affected by changes to the class

evansLibrary.addBook('Moby Dick');


//use something that changes over time

//getters and setters allow you to modify the class without modifying the accessors to the class