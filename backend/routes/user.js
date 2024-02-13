const express = require('express');
const router = express.Router();
const {handleLogin, handleRegister} = require('../controllers/user');

router
    .route('/login')
    .post(handleLogin)

router
    .route('/register')
    .post(handleRegister)

module.exports = {router};