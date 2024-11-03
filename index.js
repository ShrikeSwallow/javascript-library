const myLibrary = [];
const list = document.querySelector(".list");
const newBook = document.querySelector(".new-book");

const Book = (title, author, pages, readStatus) => {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus.toLowerCase();
  this.info = () => {
    if (this.readStatus === "yes")
      return `${this.title} by ${this.author}, ${this.pages} pages, already read.`;
    else
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
  };
};

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const displayAllBooks = () => {
  list.innerHTML = "";
  myLibrary.forEach((book) => {
    console.log(book.info());
    const listItem = document.createElement("li");
    listItem.textContent = book.info();
    list.appendChild(listItem);
  });
};
