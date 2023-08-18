const addBook = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const submit = document.querySelector("#submitInput");

const myLibrary = [];

addBook.addEventListener("click", () => {
  addBookToLibrary();
});

function book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  form.style.visibility = "visible";
  const book = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const read = document.createElement("button");
  const remove = document.createElement("button");

  book.setAttribute("id", "book");
  title.setAttribute("id", "title");
  author.setAttribute("id", "author");
  read.setAttribute("id", "read");
  remove.setAttribute("id", "remove");

  submit.addEventListener("click", () => {
    form.style.visibility = "hidden";
  });
}
