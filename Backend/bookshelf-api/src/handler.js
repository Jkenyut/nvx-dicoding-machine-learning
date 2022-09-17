/* eslint-disable max-len */
// import module
const { nanoid } = require('nanoid'); // untuk menampilkan karakter unik pada id
const books = require('./books');

const addBookHandlers = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

  // jika tidak menginputkan name pada request body
  if (name === undefined) {
    const response = h // h = hapi
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400); // bad request

    return response; // mengembalikan nilai response
  }

  // jika nilai pageCount lebih kecil daripada nilai readPage
  if (pageCount < readPage) {
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400); // bad request

    return response; // mengembalikan nilai response
  }

  const id = nanoid(16); // id nanoid dengan panjang 16 digit yang unik
  const finished = pageCount === readPage; // finish ketika nilai pageCount indentik dengan nilai readPage
  const insertedAt = new Date().toISOString(); // date ke string
  const updatedAt = insertedAt;
  // array newBook yang berisi beberapa nilai yang dibutuhkan
  const newBook = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook); // push ke newBook array
  // filter untuk mengecheck apakah newBook sudah di push
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  // jika buku baru berhasil dimasukkan atau disimpan
  if (isSuccess) {
    const response = h
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      })
      .code(201); // created

    return response; // mengembalikan nilai response
  }

  // jika server gagal memasukkan/menyimpan buku karena alasan umum (generic error).
  const response = h
    .response({
      status: 'fail',
      message: 'Buku gagal ditambahkan',
    })
    .code(500); // internal server error

  return response; // mengembalikan nilai response
}; // akhir dari AddBookHandler

const getAllBooksHandlers = (request, h) => {
  const { name, reading, finished } = request.query;
  // var let supaya dapat diubah
  let filteredBooks = books;
  // jika nilai name defined
  if (name) {
    // filter book name dengan mengubah ke lower case
    filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  }
  // jika nilai reading defined
  if (reading) {
    filteredBooks = filteredBooks.filter((book) => book.reading === !!Number(reading));
  }
  // jika nilai finished defined
  if (finished) {
    filteredBooks = filteredBooks.filter((book) => book.finished === !!Number(finished));
  }

  const response = h
    .response({
      status: 'success',
      data: {
        books: filteredBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200); // ok atau berhasil

  return response; // mengembalikan nilai response
};

const getBookByIdHandlers = (request, h) => {
  const { bookId } = request.params;
  // menyaring
  const book = books.filter((n) => n.id === bookId)[0];
  // jika book ditemukan
  if (book) {
    const response = h
      .response({
        status: 'success',
        data: {
          book,
        },
      })
      .code(200); // ok atau berhasil
    return response;
  }
  // jika tidak maka
  const response = h
    .response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    })
    .code(404); // not found atau tidak ditemukan

  return response; // mengembalikan nilai response
};

const editBookByIdHandlers = (request, h) => {
  const { bookId } = request.params; // menangkap nilai

  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  // jika tidak terdapat name
  if (name === undefined) {
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      })
      .code(400); // bad request

    return response; // mengembalikan nilai response
  }

  // jika nilai readPage lebih besar dari pageCount
  if (pageCount < readPage) {
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400); // bad request

    return response; // mengembalikan nilai response
  }

  // selesai ketika nilai pageCount identik dengan nilai readPage
  const finished = pageCount === readPage;
  const updatedAt = new Date().toISOString(); // date ke String
  // mencari buku berdasarkan id
  const index = books.findIndex((book) => book.id === bookId);
  // jika nilai index tidak identik dengan nilai -1
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };

    // jika buku berhasil diperharui
    const response = h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200); // ok atau berhasil

    return response; // mengembalikan nilai response
  }

  // jika id tidak dapat ditemukan
  const response = h
    .response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    })
    .code(404); // not found atau tidak ditemukan

  return response; // mengembalikan nilai response
}; // akhir dari editBookByIdHandler

const deleteBookByIdHandlers = (request, h) => {
  const { bookId } = request.params;
  // mencari buku berdarkan id-nya
  const index = books.findIndex((book) => book.id === bookId);
  // jika index nilainya tidak identik dengan nilai -1
  if (index !== -1) {
    books.splice(index, 1); // splice untuk memotong array

    // jika id ditemukan dari salah satu buku
    const response = h
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200); // ok atau berhasil

    return response; // mengembalikan nilai response
  }

  // jika id tidak ditemukan diantara seluruh buku yang ada
  const response = h
    .response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    })
    .code(404); // not found atau tidak ditemukan

  return response; // mengembalikan nilai response
}; // akhir dari deleteBookByIdHandler

// ekspor module
module.exports = {
  addBookHandlers,
  getAllBooksHandlers,
  getBookByIdHandlers,
  editBookByIdHandlers,
  deleteBookByIdHandlers,
};
