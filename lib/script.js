export class BookShelf {

  constructor(){
    
    this.books =[];
    this.bookName = document.querySelector('.book');
    this.authorName = document.querySelector('.author');
    this.add = document.querySelector('.add');
    this.container = document.querySelector('.container');
    this.div = document.createElement('div');
    this.button = document.querySelectorAll('.button');

    

  }

  display() {

    if (this.books.length === 0)
      this.books = JSON.parse(localStorage.getItem('books')) || [];
    
   
    this.div.classList.add('book-list');
    this.div.innerHTML = '';

    this.container.innerHTML = this.books.reduce((output, book,index) => (
    `${output
    }
      <div class="book-list" >
      <span>${book.title}</span>
      <span>${book.writer}</span>
      <button class="button" id="${index}">remove</button>
      </div> 
    `
    ), ''); 

  }

  removeBook(index) {

    this.books= JSON.parse(localStorage.getItem('books')) || [];  
    this.books.splice(index);
    localStorage.setItem('books', JSON.stringify(this.books)); 
    this.display();
  
  }

  addBook(book) {

    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.books.push(book);

    localStorage.setItem('books',this.books);

    localStorage.setItem('books', JSON.stringify(this.books));
    
    this.display();
 
  }
 
}

