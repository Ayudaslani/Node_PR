const path = require('path');
const moive = require('../model/moive.model')
const fs = require('fs')

exports.all = async (req, res) => {
    try {

        let Moive = await moive.find();
        return res.render('index', { Moive })
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}

exports.addmoivepage = async (req, res) => {
    return res.render('addmoivepage')
}

exports.addMoive = async (req, res) => {
    try {
        let imagepath = "";
        if (req.file) {
            imagepath = `/uploads/${req.file.filename}`
        }
        let Moive = await moive.create({
            ...req.body,
            posterImage: imagepath
        })
        return res.redirect('/')

    } catch (error) {
        console.log(error);
        return res.redirect('/')
    }
}

exports.deletemoive = async (req, res) => {
    try {
        let id = req.params.id;
        let Moive = await moive.findById(id);
        if (Moive.posterImage != '') {
            let filepath = path.join(__dirname, '..', Moive.posterImage)
            try {
                await fs.unlinkSync(filepath)
            } catch (error) {
                console.log('file is missing');

            }
        }
        await moive.findByIdAndDelete(id)
        return res.redirect('/')


    } catch (error) {
        console.log(error);
        return res.redirect('/')
    }
}

exports.editmoive = async (req, res) => {
    try {
        let Moive = await moive.findById(req.params.id)
        return res.render('editmoive', { Moive })

    } catch (error) {
        console.log(error);
        return res.redirect('/')
    }
}

exports.updatemoive = async (req, res) => {
    try {
        let id = req.params.id;
        let Moive = await moive.findById(id);

        if (req.file) {
            if (Moive.posterImage != '') {
                let filepath = path.join(__dirname, '..', Moive.posterImage)
                try {
                    await fs.unlinkSync(filepath)
                } catch (error) {
                    console.log('file is missing');

                }
            }
            filepath = `/uploads/${req.file.filename}`
        }
        else {

            filepath = Moive.posterImage;
        }

        await moive.findByIdAndUpdate(Moive._id, { ...req.body, posterImage: filepath }, { new: true })
        return res.redirect('/')

    } catch (error) {
        console.log(error);
        return res.redirect('/')
    }
}

exports.moivepage = async (req, res) => {
    try {
        return res.render('moivepage')
    } catch (error) {
        console.log(error);
        return res.redirect('/');

    }
}
exports.tvshowpage = async (req, res) => {
    try {
        return res.render('tvshow')

    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}
exports.trending = async (req, res) => {
    try {
        return res.render('trending')

    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}