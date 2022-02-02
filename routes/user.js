const express = require('express')
const router = express.Router();

const UserController = require('../Controllers/UserController')

router.post('/createUser' , UserController.createUser)
router.get('/getAllUsers' , UserController.getAllUsers)

module.exports = router