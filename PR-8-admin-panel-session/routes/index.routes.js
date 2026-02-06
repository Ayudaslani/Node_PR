const express = require('express')
const { dashboardpage, loginpage, login, logoutAdmin, forgotPasswordPage, sendotp, verifyotp, verifyotppage, updatePassword, updatePasswordpage } = require('../controllers/auth.controller')
const passport = require('passport')
const routes = express.Router()

routes.get('/', loginpage)
routes.get('/dashboard',passport.checkAuthicate, dashboardpage)
routes.post('/login', passport.authenticate('local',{failureRedirect:'/'}), login);
routes.get('/logout',logoutAdmin);
routes.get('/forgot-password',forgotPasswordPage);
routes.post('/send-otp',sendotp);
routes.get('/verify-otp',verifyotppage);
routes.post('/verify-otp',verifyotp);
routes.get('/update-password',updatePasswordpage);
routes.post('/update-password',updatePassword);


routes.use('/admin', passport.checkAuthicate, require('../routes/admin.routes'))
routes.use('/category', passport.checkAuthicate, require('../routes/category.routes'))
routes.use('/subcategory', passport.checkAuthicate, require('../routes/subcategory.routes'))
routes.use('/extrasubcategory', passport.checkAuthicate, require('../routes/extrasubcategory.routes'))
routes.use('/product', passport.checkAuthicate, require('../routes/product.routes'))

module.exports = routes;