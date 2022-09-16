/* eslint-disable max-len */
// import module
const {
  addBookHandlers, getAllBooksHandlers, getBookByIdHandlers, editBookByIdHandlers, deleteBookByIdHandlers,
} = require('./handler');

const routes = [
  {
    method: 'POST', // request "post" untuk menyimpan buku
    path: '/books', // route /books
    handler: addBookHandlers,
  },
  {
    method: 'GET', // request "get" untuk menampilkan seluruh buku yang disimpan
    path: '/books', // route /books
    handler: getAllBooksHandlers,
  },
  {
    method: 'GET', // request "get" untuk menampilkan seluruh buku yang disimpan
    path: '/books/{bookId}', // dengan id dari buku
    handler: getBookByIdHandlers,
  },
  {
    method: 'PUT', // request "put" untuk mengubah buku berdasarkan id
    path: '/books/{bookId}', // dengan id dari buku
    handler: editBookByIdHandlers,
  },
  {
    method: 'DELETE', // request "Delete" untuk menghapus buku berdasarkan id
    path: '/books/{bookId}', // dengan id dari buku
    handler: deleteBookByIdHandlers,
  },
  {
    method: '*', // selain method yang terdapat pada opsi diatas
    path: '/{any*}', // route selain method yang tersedia
    handler: () => 'Halaman tidak ditemukan', // output tertulis Halaman tidak ditemukan
  },
];

module.exports = routes; // ekspor module "routes"
