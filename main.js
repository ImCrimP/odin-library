const addBook = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const readInput = document.querySelector("#readInput");
const submit = document.querySelector("#submitInput");
const library = document.querySelector("#books");

const book = document.createElement("div");
const title = document.createElement("div");
const author = document.createElement("div");
const read = document.createElement("button");
const remove = document.createElement("button");

book.setAttribute("class", "book");
title.setAttribute("class", "content");
author.setAttribute("class", "content");
let hasRead = false;
read.setAttribute("class", "bookBtn");
remove.setAttribute("class", "bookBtn");

let myLibrary = [];

addBook.addEventListener("click", () => {
  addBookToLibrary();
});

removeFromLibrary();

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  form.style.visibility = "visible";

  remove.textContent = "Remove";

  submit.addEventListener("click", () => {
    let newBook = new Book(
      titleInput.value,
      authorInput.value,
      readInput.checked
    );
    console.log(newBook.valueOf());

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    hasRead = newBook.read;

    if (hasRead) {
      read.textContent = "Read";
    } else {
      read.textContent = "Not Read";
    }

    book.append(title);
    book.append(author);
    book.append(read);
    book.append(remove);

    library.append(book);
    myLibrary.push(book);

    form.style.visibility = "hidden";
  });
}

function removeFromLibrary() {
  remove.addEventListener("click", () => {
    book.remove();
    myLibrary.pop();
  });
}
