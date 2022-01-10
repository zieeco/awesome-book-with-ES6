import Book from './Book.js';

export default (id, title, author) => {
  const bookList = document.querySelector('#book-list');
  bookList.classList.add('border');
  const li = document.createElement('li');
  li.innerHTML = `<div class="d-flex-only">
  <h2><q>${title}</q></h2>
  <span>by</span>
  <h2>${author}</h2>
  </div>`;
  const removeBookBtn = document.createElement('button');
  removeBookBtn.textContent = 'Remove';
  li.appendChild(removeBookBtn);
  bookList.appendChild(li);
  removeBookBtn.addEventListener('click', () => {
    const book = new Book(id, title, author);
    id = removeBookBtn.id;
    book.removeBook();
    if (li.previousElementSibling === null && li.nextElementSibling === null) {
      bookList.classList.remove('border');
      li.remove();
    } else {
      li.remove();
    }
  });
};