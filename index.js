const list = document.querySelector(".list");
const newBook = document.querySelector(".new-book-btn");

const formPanel = document.querySelector("aside");
const form = document.querySelector("form");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const answer = document.querySelector("#answer");

let statusBtn = document.querySelectorAll(".status-btn");
let deleteBtn = document.querySelectorAll(".delete-btn");

class Library {
  constructor() {
    this.library = [];
  }
  addBookToLibrary = (book) => {
    this.library.push(book);
  };
  displayAllBooks = () => {
    list.innerHTML = "";
    this.library.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.textContent = book.info();

      const status = document.createElement("button");
      status.classList.add("status-btn");
      status.textContent = "Change read status";
      listItem.appendChild(status);
      const delBtn = document.createElement("button");
      delBtn.classList.add("delete-btn");
      delBtn.textContent = "Remove from Library";
      listItem.appendChild(delBtn);

      list.appendChild(listItem);
    });

    statusBtn = document.querySelectorAll(".status-btn");
    statusBtn.forEach((button, index) => {
      button.addEventListener("click", () => {
        myLibrary.library[index].toggleRead();
        myLibrary.displayAllBooks();
      });
    });

    deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach((button, index) => {
      button.addEventListener("click", () => {
        myLibrary.library.splice(index, 1);
        myLibrary.displayAllBooks();
      });
    });
  };
}

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus.toLowerCase();
  }
  info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.readStatus}`;
  };
  toggleRead = () => {
    if (this.readStatus === "yes") {
      this.readStatus = "no";
    } else {
      this.readStatus = "yes";
    }
  };
}

const myLibrary = new Library();
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
  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    answer.value
  );
  myLibrary.addBookToLibrary(newBook);
  formPanel.classList.add("hidden");
  myLibrary.displayAllBooks();
});
