const express = require('express');
const port = 8899;
const app = express();

app.set("view engine", 'ejs')

const dbconnect = require('./config/dbconnection')
dbconnect();
app.use(express.static('public'))
app.use(express.urlencoded());

 
app.listen(port, () => {
    console.log(`server start At http://localhost:${port}`);
})

app.use('/', require('./routes/moive.routes'))

