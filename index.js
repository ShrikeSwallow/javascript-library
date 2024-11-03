const myLibrary = [];

const Book = (title, author, pages, readStatus) => {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus.toLowerCase();
  this.info = () => {
    if (this.readStatus === "yes")
      console.log(
        `${this.title} by ${this.author}, ${this.pages} pages, already read.`
      );
    else
      console.log(
        `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
      );
  };
};

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const displayAllBooks = () => {
  myLibrary.forEach((book) => console.log(book.info()));
};
