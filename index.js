const myLibrary = [];
const list = document.querySelector(".list");
const newBook = document.querySelector(".new-book-btn");

const formPanel = document.querySelector("aside");
const form = document.querySelector("form");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const answer = document.querySelector("#answer");

function Book(title, author, pages, readStatus) {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus.toLowerCase();
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.readStatus}`;
  };
}

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const displayAllBooks = () => {
  list.innerHTML = "";
  myLibrary.forEach((book) => {
    //console.log(book.info());
    const listItem = document.createElement("li");
    listItem.textContent = book.info();
    list.appendChild(listItem);
  });
};

newBook.addEventListener("click", () => {
  form.reset();
  formPanel.classList.remove("hidden");
  bookTitle.focus();
});
form.addEventListener("reset", () => {
  formPanel.classList.add("hidden");
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    answer.value
  );
  addBookToLibrary(newBook);
  console.log(myLibrary);
  formPanel.classList.add("hidden");
  displayAllBooks();
});
