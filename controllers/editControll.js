const AuthorBook = require('../models/userModel');

const editShow = async (req, res) => {
    try {
        const bookId = req.params.id;
        const authors = await AuthorBook.find();
        const book = await AuthorBook.findById(bookId);
        res.render("edit", { book, authors });
    } catch (error) {
        console.error('Redirect error:', error);
        res.status(500).json({ success: false, error: 'Redirect error:' });
    }
}

const editBook = async (req, res) => {
    try {
        const bookId = req.body.bookId;
        const updatedAuthorName = req.body.updatedAuthorName;
        const updatedBookTitle = req.body.updatedBookTitle;

        await AuthorBook.findByIdAndUpdate(bookId, { authorName: updatedAuthorName, bookTitle: updatedBookTitle });
        res.redirect("/");
    } catch (error) {
        console.error('Edit error:', error);
        res.status(500).json({ success: false, error: 'Edit error' });
    }
}

const updateBookAPI = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await AuthorBook.findByIdAndUpdate(id, req.body);

        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        
        const updatedBook = await AuthorBook.findById(id);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ success: false, error: 'Edit error' });
    }
}
module.exports = { editShow, editBook, updateBookAPI };