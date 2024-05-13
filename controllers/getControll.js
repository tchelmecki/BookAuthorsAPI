const AuthorBook = require('../models/userModel');

const getBook = async (req, res) => {
    try {
        const authors = await AuthorBook.find();
        // console.log(authors);
        res.render('index', { authors });
    } catch (error) {
        console.error('Get error:', error);
        res.status(500).send('Get error');
    }
}

const getBooksAPI = async (req, res) => {
    try {
        const authors = await AuthorBook.find({});
        res.status(200).json(authors)
    } catch (error) {
        console.error('Get API error:', error);
        res.status(500).send('Get API error');
    }
}

const getBookOneAPI = async (req, res) => {
    try {
        const {id} = req.params;
        const author = await AuthorBook.findById(id);
        res.status(200).json(author);
    } catch (error) {
        console.error('Get one book API error:', error);
        res.status(500).send('Get one book API error');
    }
}

module.exports = {getBook, getBooksAPI, getBookOneAPI};