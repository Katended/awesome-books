/* eslint-disable import/prefer-default-export */
export class BookShelf {
  constructor() {
    this.bookName = document.querySelector('.book');
    this.authorName = document.querySelector('.author');
    this.add = document.querySelector('.add');
    this.container = document.querySelector('.container');
    this.div = document.createElement('div');
  }

  display() {
    if (this.books.length === 0) this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.div.classList.add('book-list');
    this.div.innerHTML = '';

    this.container.innerHTML = this.books.reduce((output, book, index) => (
      `${output
      }
        <div class="book-list" >
        <span>${book.title}</span>
        <span>${book.writer}</span>
        <span><button class="button" id="${index}">remove</button><span>
        </div> 
      `
    ), '');
  }

  removeBook(index) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.display();
  }

  addBook(book) {
    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.books.push(book);

    localStorage.setItem('books', this.books);

    localStorage.setItem('books', JSON.stringify(this.books));

    this.display();
  }
}
