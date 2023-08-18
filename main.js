const addBook = document.querySelector("#addBtn");

const myLibrary = [];

addBook.addEventListener("click", () => {
  addBookToLibrary();
});

function book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {}
