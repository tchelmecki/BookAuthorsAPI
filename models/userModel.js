const mongoose = require('mongoose');

const authorBookSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    bookTitle: {
        type: String,
        required: true
    }
});

const AuthorBook = mongoose.model('authorbooks', authorBookSchema);

module.exports = AuthorBook;