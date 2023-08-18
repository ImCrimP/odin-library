const addBook = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const readInput = document.querySelector("#readInput");
const submit = document.querySelector("#submitInput");
let library = document.querySelector("#books");
let inLibrary = false;
/*
let remove = document.createElement("button");
remove.classList.add("bookBtn");
let book = document.createElement("div");

const title = document.createElement("div");
const author = document.createElement("div");
const read = document.createElement("button");


book.setAttribute("class", "book");
title.setAttribute("class", "content");
author.setAttribute("class", "content");
let hasRead = false;
read.setAttribute("class", "bookBtn");
remove.setAttribute("class", "bookBtn");
remove.textContent = "Remove";
*/

let myLibrary = [];

document.addEventListener("DOMContentLoaded", () => {
  addBook.addEventListener("click", () => {
    addBookToLibrary();
  });
});

function Book(title, author, hasRead) {
  this.title = title;
  this.author = author;
  this.hasRead = hasRead;
}

function addBookToLibrary() {
  form.style.visibility = "visible";

  submit.addEventListener("click", () => {
    inLibrary = false;
    const book = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    book.classList.add("book");
    title.classList.add("content");
    author.classList.add("content");
    let hasRead = false;
    read.classList.add("bookBtn");
    remove.classList.add("bookBtn");
    remove.textContent = "Remove";

    let newBook = new Book(
      titleInput.value,
      authorInput.value,
      readInput.checked
    );

    bookIndex = myLibrary.indexOf(newBook.title);
    console.log(bookIndex);

    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title == newBook.title) {
        inLibrary = true;
      }
    }
    if (!inLibrary) {
      myLibrary.push(newBook);

      console.log(myLibrary);
      console.log(newBook.valueOf());

      title.textContent = newBook.title;
      author.textContent = newBook.author;
      hasRead = newBook.hasRead;

      if (hasRead) {
        read.textContent = "Read";
        read.style.backgroundColor = "lightgreen";
      } else {
        read.textContent = "Not Read";
        read.style.backgroundColor = "lightcoral";
      }

      book.appendChild(title);
      book.appendChild(author);
      book.appendChild(read);
      book.appendChild(remove);

      library.appendChild(book);
    }

    form.style.visibility = "hidden";
    remove.addEventListener("click", () => {
      book.remove();
    });

    read.addEventListener("click", () => {
      if (hasRead) {
        hasRead = false;
        read.style.backgroundColor = "lightcoral";
        read.textContent = "Not Read";
      } else {
        hasRead = true;
        read.style.backgroundColor = "lightgreen";
        read.textContent = "Read";
      }
    });
  });
}

function isInLibrary(newBook) {
  return myLibrary.includes(newBook);
}
