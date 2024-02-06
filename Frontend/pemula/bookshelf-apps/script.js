// {
//   id: string | number,
//   title: string,
//   author: string,
//   year: number,
//   isComplete: boolean,
// }

const books = [];
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
const STORAGE_KEY = "BOOK_APPS";

function generateId() {
  return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

function findBook(Id) {
  for (const bookList of books) {
    if (bookList.id === Id) {
      return bookList;
    }
  }
  return null;
}

function findBookIndex(Id) {
  for (const index in books) {
    if (books[index].id === Id) {
      return index;
    }
  }
  return -1;
}

function isStorageExist() /* boolean */ {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

function saveData() {
  if (isStorageExist()) {
    const parsed /* string */ = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function loadDataFromStorage() {
  const serializedData /* string */ = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const booksItem of data) {
      books.push(booksItem);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function makeBookList(booksObject) {
  const { id, title, author, year, isComplete } = booksObject;
  const textTitle = document.createElement("h3");
  textTitle.innerText = title;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = `Penulis: ${author}`;

  const textYear = document.createElement("p");
  textYear.innerText = `Tahun: ${year}`;

  const textContainer = document.createElement("div");
  textContainer.classList.add("action");

  const container = document.createElement("article");
  container.append(textTitle, textAuthor, textYear);
  container.classList.add("book_item");

  container.setAttribute("id", `book-${id}`);

  if (isComplete) {
    const greenButton = document.createElement("button");
    greenButton.classList.add("green");
    greenButton.innerText = "Belum selesai di Baca";
    greenButton.addEventListener("click", function () {
      undoBookFromCompleted(id);
    });
    const redButton = document.createElement("button");
    redButton.classList.add("red");
    redButton.innerText = "Hapus buku";
    redButton.addEventListener("click", function () {
      removeBookFromComplete(id);
    });
    textContainer.append(greenButton, redButton);
    container.append(textContainer);
  } else {
    const greenButton = document.createElement("button");
    greenButton.classList.add("green");
    greenButton.innerText = "Selesai dibaca";
    greenButton.addEventListener("click", function () {
      addBookToComplete(id);
    });
    const redButton = document.createElement("button");
    redButton.classList.add("red");
    redButton.innerText = "Hapus buku";
    redButton.addEventListener("click", function () {
      removeBookFromComplete(id);
    });
    textContainer.append(greenButton, redButton);
    container.append(textContainer);
  }

  return container;
}

function addBook() {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;

  const generatedID = generateId();
  const bookObject = generateBookObject(generatedID, title, author, year, isComplete);
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function addBookToComplete(id) {
  const bookId = findBook(id);
  if (bookId == null) return;

  bookId.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoBookFromCompleted(id) {
  const bookId = findBook(id);
  if (bookId == null) return;

  bookId.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeBookFromComplete(id) {
  const bookId = findBookIndex(id);
  if (bookId === -1) return;
  books.splice(bookId, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("inputBook");

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener(SAVED_EVENT, () => {
  console.log("Data berhasil di simpan.");
});

function searchBook() {
  const book = document.getElementById("searchBookTitle").value;
  console.log(book);

  const filterItems = (needle, books) => {
    let query = needle.toLowerCase();

    return books.filter((item) => item.title.toLowerCase().indexOf(query) >= 0);
  };
  const uncompletedBooklist = document.getElementById("BookshelfList");
  for (const booksItem of filterItems(book, books)) {
    const bookElement = makeBookList(booksItem);
    uncompletedBooklist.append(bookElement);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const submitSearch = document.getElementById("searchBook");
  const search = false;
  submitSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBook();
  });

  if (!search) {
    document.addEventListener(RENDER_EVENT, function () {
      const uncompletedBooklist = document.getElementById("incompleteBookshelfList");
      const completeBookList = document.getElementById("completeBookshelfList");

      // clearing list item
      uncompletedBooklist.innerHTML = "";
      completeBookList.innerHTML = "";

      for (const booksItem of books) {
        const bookElement = makeBookList(booksItem);
        if (booksItem.isComplete) {
          completeBookList.append(bookElement);
        } else {
          uncompletedBooklist.append(bookElement);
        }
      }
    });
  }

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
