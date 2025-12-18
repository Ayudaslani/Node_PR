const express = require('express');
const routes = express.Router();

const { getAllBooks, addBookPage, addbook, editbook, updatebook, deletebook, aboutBookPage, storeBookPage, contactBookPage } = require('../controller/book.controller');
routes.get('/', getAllBooks);

routes.get('/about', aboutBookPage)

routes.get('/storebook', storeBookPage)

routes.get('/contact', contactBookPage)

routes.get('/add-book-page', addBookPage)

routes.post('/add-book', addbook)

routes.get('/edit-book/:id', editbook)

routes.post('/update-book/:id', updatebook)

routes.get('/delete-book/:id', deletebook)

module.exports = routes;