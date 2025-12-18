const express = require('express');
const app = express();
const port = 8005;
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded());
const dbconnect = require('./config/db.connection');
dbconnect();

app.use('/', require('./routers/book.routes'))

app.listen(port, (req, res) => {
    console.log(`server Start at http://localhost:${port}`);
})

