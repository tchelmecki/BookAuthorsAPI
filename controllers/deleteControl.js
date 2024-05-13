const AuthorBook = require('../models/userModel');

const deleteBook = async (req, res) => {
    try {
        const bookId = req.body.bookId;
        await AuthorBook.deleteOne({ _id: bookId });
        res.redirect('/'); 
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ success: false, error: 'Delete error' });
    }
}

const deleteBookAPI = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await AuthorBook.findByIdAndDelete(id);
       
        if(!book){
            return res.status(404).json({message: "Book nod found"});
        }
        res.status(200).json({message: "Product deleted succesfully"});
    } catch (error) {
        res.status(500).json({ success: false, error: 'Delete error' });
    }
}

module.exports = {deleteBook, deleteBookAPI};