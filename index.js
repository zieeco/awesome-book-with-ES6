import { DateTime } from './luxon.js';

import Book from './modules/Book.js';
import displayBook from './modules/displayBook.js';
import toTitleCase from './modules/toTitleCase.js';

const addBtn = document.querySelector('#add-btn');

const myBooks = JSON.parse(localStorage.getItem('books'));
if (myBooks !== null) {
  myBooks.forEach((book) => {
    displayBook(book.id, book.title, book.author);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now();
    const book = new Book(id, toTitleCase(title), toTitleCase(author));
    book.addBook();
    if (title && author) {
      displayBook(book.id, book.title, book.author);
    }
  });
});

const date = document.getElementById('date');
const now = DateTime.now();
date.innerText = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

const seeListsOfBooks = document.getElementById('list-of-books');
const addNewBook = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

seeListsOfBooks.addEventListener('click', () => {
  seeListsOfBooks.classList.add('active');
  addNewBook.classList.remove('active');
  contactLink.classList.remove('active');
  document.getElementById('awesome-books').classList.remove('hide');
  document.getElementById('add-book').classList.add('hide');
  document.getElementById('contact-us').classList.add('hide');
});

addNewBook.addEventListener('click', () => {
  seeListsOfBooks.classList.remove('active');
  addNewBook.classList.add('active');
  contactLink.classList.remove('active');
  document.getElementById('add-book').classList.remove('hide');
  document.getElementById('awesome-books').classList.add('hide');
  document.getElementById('contact-us').classList.add('hide');
});

contactLink.addEventListener('click', () => {
  seeListsOfBooks.classList.remove('active');
  addNewBook.classList.remove('active');
  contactLink.classList.add('active');
  document.getElementById('contact-us').classList.remove('hide');
  document.getElementById('awesome-books').classList.add('hide');
  document.getElementById('add-book').classList.add('hide');
});