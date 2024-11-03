const myLibrary = [];
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

function Book(title, author, pages, readStatus) {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus.toLowerCase();
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.readStatus}`;
  };
  this.toggleRead = () => {
    if (this.readStatus === "yes") {
      this.readStatus = "no";
    } else {
      this.readStatus = "yes";
    }
  };
}

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const displayAllBooks = () => {
  list.innerHTML = "";
  myLibrary.forEach((book, index) => {
    //console.log(book.info());
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
      myLibrary[index].toggleRead();
      displayAllBooks();
    });
  });

  deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      console.log(`clicked, index: ${index}`);
      myLibrary.splice(index, 1);
      displayAllBooks();
    });
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
  formPanel.classList.add("hidden");
  displayAllBooks();
});
