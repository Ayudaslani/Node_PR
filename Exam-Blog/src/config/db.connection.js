const mongoose = require('mongoose')

const dbconnect = () => {
    mongoose.connect('mongodb+srv://ayushidaslani:ayushidaslani29@cluster0.d66cwov.mongodb.net/examblog')
        .then(() => console.log('DB is Connected !!!'))
        .catch((err) => console.log(err))
}

module.exports = dbconnect;