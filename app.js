//the library arrey with a variable to use for every new book
let myLibrary = [];
let newBook;
//buttons 
const addBtn = document.getElementById('formAddbtn');
const openPopup = document.querySelector('.addNewBookBtn');
const popupForm = document.querySelector('.popup');
const closePopup = document.querySelector('.close');
//event listeners
openPopup.addEventListener('click', () => popupForm.style.display = 'block');
closePopup.addEventListener('click', () => popupForm.style.display = 'none');
addBtn.addEventListener('click', addToLibrary);

//book class with it's constructor
class Book {
    constructor(title, author, pages, read){
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + '📃';
        this.read = form.read.checked;
    }
};
//functions that creates a new book and add's it to the library
function addToLibrary() {
    event.preventDefault();
    popupForm.style.display = 'none';

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    storeDataLocal();
    displayBooks();
    form.reset();
};
//storing library in local storage
function storeDataLocal() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};
//generates the book that's gonna be displayed in the browser
function generateBook(bookObj){
    const library = document.querySelector('.books-container');
    //creating DOM elements
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const isReadBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    bookDiv.classList.add('book');
    titleDiv.classList.add('title');
    authorDiv.classList.add('author');
    pageDiv.classList.add('pages');
    isReadBtn.classList.add('readBtn');
    removeBtn.classList.add('removeBtn');

    bookDiv.setAttribute('id', myLibrary.indexOf(bookObj));

    titleDiv.textContent = 'Title : ' + bookObj.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = 'Author : ' + bookObj.author;
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = 'pages : ' + bookObj.pages;
    bookDiv.appendChiled(pageDiv);

    if (bookObj.read === true) {
        isReadBtn.textContent = 'Read';
        isReadBtn.style.backgroundColor = '#C1E1C1';
    } else {
        isReadBtn.textContent = 'Not Read';
        isReadBtn.style.backgroundColor = '#FA8072';
    }
    
    removeBtn.textContent = 'Remove';
    bookDiv.appendChild(removeBtn);

    //adding the DOM book div to the Library area
    library.appendChild(bookDiv);
    //adding the remove button eventlistener
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(bookObj), 1);
        storeDataLocal();
        displayBooks();
    });
    //add the functionality to toggle read button
    isReadBtn.addEventListener('click', () => {
        bookObj.read = !bookObj.read;
        storeDataLocal();
        displayBooks();
    });
};
//display's book on the browser
function displayBooks() {
    const display = document.querySelector('.books-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++){
        generateBook(myLibrary[i]);
    }
};
//gets books when page is refreshed
function refresh() {
    if (!localStorage.myLibrary) {
        displayBooks();
    }else {
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        displayBooks();
    }
};

refresh();