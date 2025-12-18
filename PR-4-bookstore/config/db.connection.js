const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/nodeproject')
        .then(() => console.log('DB is Created !!'))
        .catch((err) => console.log(err))
}
module.exports = dbconnect;