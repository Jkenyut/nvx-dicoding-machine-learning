// eslint-disable-next-line no-unused-vars
const {nanoid} = require("nanoid"), data = require("../model/model"), addBookHandler = async (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;
    const newBooks = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        finished,
        insertedAt,
        updatedAt,
    };

    if (!name) {
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. Mohon isi nama buku",
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
        });
        response.code(400);
        return response;
    }

    const isSuccess = data.filter((book) => book.id === id).length > 0;

    if (!isSuccess) {
        data.push(newBooks);
        const response = h.response({
            status: "success",
            message: "Buku berhasil ditambahkan",
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: "error",
        message: "Buku gagal ditambahkan",
    });
    response.code(500);
    return response;
}, getAllBookHandler = async (request, h) => {
    const {name, reading, finished} = request.query;
    let filteredBooks = data;

    if (name) {
        filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()))
    }

    if (reading) {
        filteredBooks = filteredBooks.filter((book) => book.reading === !!Number(reading));
    }
    // jika nilai finished defined
    if (finished) {
        filteredBooks = filteredBooks.filter((book) => book.finished === !!Number(finished));
    }

    if (data.length > 0) {
        const response = h.response({
            status: "success",
            data: {
                books: filteredBooks.map((book) => {
                    return {
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    };
                }),
            },
        });
        response.code(200);
        return response;
    } else if (data.length < 1) {
        const response = h.response({
            status: "success",
            data: {
                books: [],
            },
        });
        response.code(200);
        return response;
    }
}, getBookbyIdHandler = async (request, h) => {
    const {bookId} = request.params;
    const book = data.filter((book) => book.id === bookId)[0];
    if (book) {
        const response = h.response({
            status: "success",
            data: {
                book,
            },
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Buku tidak ditemukan",
    });
    response.code(404);
    return response;
}, editBookByIdHandler = async (request, h) => {
    const {bookId} = request.params;

    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const findIndex = data.findIndex((book) => book.id === bookId);
    const editBook = {
        ...data[findIndex],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    };

    if (!name) {
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. Mohon isi nama buku",
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
        });
        response.code(400);
        return response;
    }

    if (findIndex !== -1) {
        data[findIndex] = editBook;

        const response = h.response({status: "success", message: "Buku berhasil diperbarui"});
        response.code(200);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
    response.code(404);
    return response;
}, deleteBookByIdHandler = async (request, h) => {
    const {bookId} = request.params;
    const findIndex = data.findIndex((file) => file.id === bookId);
    if (findIndex !== -1) {
        data.splice(findIndex, 1);
        const response = h.response({
            status: "success",
            message: "Buku berhasil dihapus",
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Buku gagal dihapus. Id tidak ditemukan",
    });
    response.code(404);
    return response;
}, helloHandler = async () => {
    return {
        status: "success",
        message: "HELLO WORD"
    }
};


module.exports = {
    addBookHandler,
    getAllBookHandler,
    getBookbyIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
    helloHandler,
};
