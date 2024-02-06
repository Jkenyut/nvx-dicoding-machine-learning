const {
    addBookHandler,
    getAllBookHandler,
    getBookbyIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
    helloHandler
} = require("../controllers/bookshelf");
const routes = [
    {method: "POST", path: "/books", handler: addBookHandler},
    {method: "GET", path: "/books", handler: getAllBookHandler},
    {method: "GET", path: "/books/{bookId}", handler: getBookbyIdHandler},
    {method: "PUT", path: "/books/{bookId}", handler: editBookByIdHandler},
    {method: "DELETE", path: "/books/{bookId}", handler: deleteBookByIdHandler},
    {method: "GET", path: "/", handler: helloHandler}
];

module.exports = routes;
