const mongoose = require('mongoose');

const moiveSchema = mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    releaseyear: {
        type: Number
    },
    duration: {
        type: Number
    },
    rating: {
        type: String
    },
    posterImage: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('moive', moiveSchema)