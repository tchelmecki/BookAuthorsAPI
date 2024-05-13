const AuthorBook = require('../models/userModel');

const addBook = async (req, res) => {
    try {
        const authorName= req.body.authorName;
        const bookTitle  = req.body.bookTitle;
        console.log(authorName + " " + bookTitle);
        const authorBook = await AuthorBook.create({ authorName, bookTitle });
        res.redirect('/');
        //res.status(200).json({ success: true, authorBook });
         } catch (error) {
        console.error('Create error:', error);
        res.status(500).json({ success: false, error: 'Create error' });
    }
}

const addBookAPI = async (req, res) =>{
    try{
        const book = await AuthorBook.create(req.body);
        res.status(200).json({ success: true, message: 'Added successfully', book });
    }
    catch(error){
        console.error('Create error:', error);
        res.status(500).json({ success: false, error: 'Create error:' });
    }
};

module.exports = {addBook, addBookAPI};