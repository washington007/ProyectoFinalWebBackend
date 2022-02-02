const express = require('express')
const router = express.Router();

const TeamsController = require('../Controllers/TeamsController')

router.post('/createTeams' , TeamsController.createTeams)
router.get('/getAllTeams' , TeamsController.getAllTeams)


module.exports = router