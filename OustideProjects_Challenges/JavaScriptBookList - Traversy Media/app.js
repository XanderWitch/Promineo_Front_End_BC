// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    //use static method so you don't have to instantiate the UI class
    //classes are like blueprints, run multiple times with different values. Static methods and classes or properties are used when you want a collection of associated behavior, not multiple values. Don't usually use the "this" keyword.

    static displayBooks() {

        //hardcoded array of books (like one pulled from storage)
        const books = Store.getBooks(); //use method to retrieve stored books from local storage/user's browser/can save in user's browser for next time. Persists if browser is close. Local storage is not secure or dependable. Real app better to use database. But local storage is good for multiple window functionality.

        //Loop through all books in array and call the method addBookToList in UI class
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;

        list.appendChild(row);
    }

    static deleteBook(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    //Create nice Bootstrap Alert (need text of message and type of message - danger, info, success, etc.)
    static showAlert(message, className) {

        //Build div from scratch and insert into DOM
        const div = document.createElement('div');
        div.className = `mt-3 alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container'); //parent element
        const form = document.querySelector('#book-form'); //element it goes before
        container.insertBefore(div, form); //insert the div before the form

        //Vanish alert box in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000); //first parameter is the function, which grabs the alert here, and the secton parameter is the time in milliseconds
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = ''; document.querySelector('#isbn').value = '';
    }

}
// Store Class: Handles Storage (Local/Browser)
//Local storage stores key-value pairs. Can't store objects in local storage, has to be stored as strings. So, to put it in, you have to stringify it, and to pull it out, you have to parse it.
class Store {
    //getBooks
    static getBooks() {
        let books;
        //if there is no books item, make it an empty array
        if (localStorage.getItem('books') === null) {
            books = [];
            //otherwise, if there is something in the books item            
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    //Add new book to books array in local storage, stringify because local storage uses strings, not objects
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    //Use ISBN (unique ID) to remove a book
    static removeBook(isbn) {
        const books = Store.getBooks(); //get the books

        //loop through each book to find the one that has the matching isbn
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        //reset local storage with that book removed
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent actual submit
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validate all fields
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        //Instantiate book
        const book = new Book(title, author, isbn);

        //Add Book to UI
        UI.addBookToList(book);

        //Add Book to Store (local storage)
        Store.addBook(book);

        //Show success message
        UI.showAlert('Book added!', 'success');

        //Clear fields
        UI.clearFields();
    }
})

// Event: Remove a Book
// Use Event Propagation to select something above the thing you wan to delete, like the book list, and target whatever is clicked inside of it
document.querySelector('#book-list').addEventListener('click', (e) => {

    //Remove book from UI
    UI.deleteBook(e.target);

    //Remove book from store (local storage) //navigate to the parent element (the td) and use previous element sibling to get the isbn
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent); //should give ISBN and be passed into removeBook

    //Show success message
    UI.showAlert('Book removed!', 'success');
})