const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect('mongodb+srv://ayushidaslani:ayushidaslani29@cluster0.d66cwov.mongodb.net/blog')
        .then(() => console.log('DB is connected !!'))
        .catch((error) => console.log(error))
}
module.exports = dbconnect;