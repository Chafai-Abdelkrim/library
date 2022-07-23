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
}
//functions that creates a new book and add's it to the library
