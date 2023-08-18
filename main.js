const addBook = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const readInput = document.querySelector("#readInput");
const submit = document.querySelector("#submitInput");
let library = document.querySelector("#books");
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

    if (!isInLibrary(newBook)) {
      myLibrary.push(newBook);
    }

    console.log(myLibrary);
    console.log(newBook.valueOf());

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    hasRead = newBook.read;

    if (hasRead) {
      read.textContent = "Read";
    } else {
      read.textContent = "Not Read";
    }

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(read);
    book.appendChild(remove);

    library.appendChild(book);

    form.style.visibility = "hidden";
    remove.addEventListener("click", () => {
      book.remove();
    });
  });
}

function isInLibrary(newBook) {
  return myLibrary.includes(newBook.title);
}
