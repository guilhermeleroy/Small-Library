let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    const book = new Book(title.value, author.value, pages.value, read.value);

    myLibrary.push(book);
}

const postButton = document.querySelector("#post");
postButton.addEventListener("click", addBookToLibrary)
