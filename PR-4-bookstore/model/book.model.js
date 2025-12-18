const mongoose = require('mongoose');

const bookschema = mongoose.Schema({
    title: {
        type: String
    },
    authorname: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('books', bookschema);