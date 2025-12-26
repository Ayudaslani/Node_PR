const express = require('express');
const { all, addmoivepage, addMoive, deletemoive, editmoive, updatemoive, moivepage,tvshowpage, trending } = require('../controller/moive.controller');
const uploadImage = require('../middleware/uploadImage');
const routes = express.Router();

routes.get('/', all);
routes.use('/uploads', express.static('uploads'))
routes.get('/addmoivepage', addmoivepage)
routes.post('/add-moive-data', uploadImage.single('posterImage'), addMoive)
routes.get('/delete-moive/:id', deletemoive)
routes.get('/edit-moive/:id', editmoive)
routes.post('/update-moive-data/:id', uploadImage.single('posterImage'), updatemoive)
routes.get('/moivepage',moivepage)
routes.get('/tvshow',tvshowpage)
routes.get('/trending',trending)

module.exports = routes;