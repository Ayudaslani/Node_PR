
const books = require('../model/book.model');
exports.getAllBooks = async (req, res) => {
    try {
        let Books = await books.find();
        return res.render('index', { Books })

    } catch (err) {
        console.log(err);
        return res.redirect('/');
    }
};

exports.aboutBookPage = async (req, res) => {
    try {
        return res.render('aboutBook');

    } catch (err) {
        console.log(err);
        return res.redirect('/');
    }
}

exports.storeBookPage = async (req, res) => {
    try {
        let Books = await books.find();
        return res.render('storeBook', { Books })

    } catch (err) {
        console.log(err);
        return res.redirect('/');

    }
}

exports.contactBookPage = async (req, res) => {
    try {
        return res.render('contactus')

    } catch (err) {
        console.log(err);
        return res.redirect('/');
    }
}

exports.addBookPage = async (req, res) => {
    return res.render('addBooks');
};

exports.addbook = async (req, res) => {
    try {
        let Book = await books.create(req.body);
        console.log(Book);

        return res.redirect('/');

    } catch (err) {
        console.log(err);
        return res.redirect('/');
    }
};

exports.editbook = async (req, res) => {
    try {
        let Book = await books.findById(req.params.id);
        return res.render('editBook', { Book });

    } catch (err) {
        console.log(err);
        return res.redirect('/');
    }
};

exports.updatebook = async (req, res) => {
    try {
        let Book = await books.findById(req.params.id);
        if (!Book) {
            console.log('Book Are Not Found !!');
        }
        Book = await books.findByIdAndUpdate(Book._id, req.body, { new: true });
        return res.redirect('/');

    } catch (err) {
        console.log(err);
        return res.redirect('/');

    }
};

exports.deletebook = async (req, res) => {
    try {
        let id = req.params.id;
        let Book = await books.findById(id);
        if (!Book) {
            console.log('Book are Not Found !!');
        }
        await books.findByIdAndDelete(id)
        return res.redirect('/');

    } catch (err) {
        console.log(err);
        return res.redirect('/');
    }
};

