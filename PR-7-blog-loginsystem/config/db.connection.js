const mongoose = require('mongoose')
const dbconnect = () => {
    mongoose.connect('mongodb+srv://ayushidaslani:ayushidaslani29@cluster0.d66cwov.mongodb.net/blogsession')
        .then(() => console.log('DB is Connected !!!'))
        .catch((error) => console.log(error))
}

module.exports = dbconnect;