/* eslint-disable import/prefer-default-export */
import { BookShelf } from './lib.js';

const shelf = new BookShelf();

const bookName = document.querySelector('.book');
const authorName = document.querySelector('.author');
const add = document.querySelector('.add');

window.onload = () => {
  shelf.display();
};
const msgSpan = document.getElementById('msg');
add.addEventListener('click', () => {
  if (bookName.value === '' || authorName.value === '') {
    msgSpan.innerHTML = 'Name/Author missing!';
  } else {
    shelf.addBook({ title: bookName.value, writer: authorName.value });
    bookName.value = '';
    authorName.value = '';
    msgSpan.innerHTML = 'Book successfully added!';
  }
  msgSpan.style.display = 'block';

  setInterval(() => { msgSpan.style.display = 'none'; }, 8000);
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.button'); // Or any other selector.

  if (target) {
    shelf.removeBook(target.id);
  }
});

const div = document.getElementById('date-time');

function getOrdinalSuffix(i) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
}

function time() {
  const date = new Date();

  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours();
  div.textContent = `${date.toLocaleString('default', { month: 'long' })} ${getOrdinalSuffix(date.getDay())} ${date.getFullYear()} ${(`0${h}`).substr(-2)}:${(`0${m}`).substr(-2)}:${(`0${s}`).substr(-2)} ${h >= 12 ? 'pm' : 'am'}`;
}

setInterval(time, 1000);

const links = document.querySelectorAll('.links'); /// create array of element objects
const list = document.getElementById('list');
const form = document.getElementById('form');
const contact = document.getElementById('contact');

list.classList.toggle('show');
form.classList.toggle('show');
contact.classList.toggle('show');
list.style.display = 'block';
links.forEach((link) => { // lopp through them
  link.addEventListener('click', function handleClick() {
    if (this.id === 'list-link') {
      list.style.display = 'block';
      form.style.display = 'none';
      contact.style.display = 'none';
    }

    if (this.id === 'add-link') {
      list.style.display = 'none';
      form.style.display = 'block';
      contact.style.display = 'none';
    }

    if (this.id === 'contact-link') {
      list.style.display = 'none';
      form.style.display = 'none';
      contact.style.display = 'block';
    }
  });
});